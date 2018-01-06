import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchListItems, deleteListItem } from "../../actions/index";
import { Link } from "react-router-dom";
import Spinner from "../misc/spinner";
import Pagination from "../misc/pagination";
import { toastError, toastSuccess } from "../../helpers/notifications";

class ShoppingListItems extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchListItems(id);
  }

  // Create a function to pass to pagination component
  fetchListItems(page, limit) {
    const { id } = this.props.match.params;
    this.props.fetchListItems(id, page, limit);
  }

  renderListItems() {
    const { shoppingListItems, match: { params: { id } } } = this.props;

    return _.map(shoppingListItems.data, item => {
      if (!item.id) {
        return <li key="1">No items found</li>;
      }

      return (
        <tr key={item.id}>
          <td />
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td className="pull-right">
            <Link
              to={`/shoppinglists/${id}/items/${item.id}`}
              className="btn btn-info"
            >
              Edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => this.handleItemDelete(item.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  handleItemDelete(itemId) {
    const listId = this.props.match.params.id;
    console.log("You are trying to delete:", itemId);
    this.props.deleteListItem(listId, itemId, () => {
      this.props.history.push(`/shoppinglists/${listId}`);
    });
  }

  render() {
    const {
      shoppingListItems: { isFetching, data, meta },
      match: { params: { id } }
    } = this.props;

    if (isFetching) {
      return <Spinner />;
    }

    return (
      <div>
        <div className="page-header">
          <h1> Here's Your Shopping lists </h1>
        </div>
        <Link to={`/shoppinglists/${id}/items/new`} className="btn btn-info">
          Add Item
        </Link>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th className="pull-right">Actions</th>
                </tr>
              </thead>
              <tbody>{this.renderListItems()}</tbody>
            </table>
            <Pagination meta={meta} onClick={this.fetchListItems.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { shoppingListItems: state.shoppingListItems };
}

export default connect(mapStateToProps, {
  fetchListItems,
  deleteListItem
})(ShoppingListItems);
