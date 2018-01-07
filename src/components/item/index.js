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
    const {
      shoppingListItems: { data, meta },
      match: { params: { id } }
    } = this.props;

    if (!data || !_.size(data)) {
      return (
        <tr>
          <td colSpan="5">
            <div className="alert alert-success">
              <strong>Opps! </strong> No Shopping List Items found in this list
              :-(. To add one, click{" "}
              <Link to={`/shoppinglists/${id}/items/new`}>here</Link>
            </div>
          </td>
        </tr>
      );
    }

    return _.map(data, item => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.date_created}</td>
          <td>{item.description}</td>
          <td className="text-center">
            <div className="btn-group">
              <Link
                to={`/shoppinglists/${id}/items/${item.id}`}
                className="btn  btn-success btn-sm btn-space"
              >
                Edit
              </Link>
              <button
                className="btn  btn-danger btn-sm"
                onClick={() => this.handleItemDelete(item.id)}
              >
                Delete
              </button>
            </div>
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

  renderPagination() {
    const { shoppingListItems: { data, meta } } = this.props;

    if (data || _.size(data)) {
      return (
        <Pagination meta={meta} onClick={this.fetchListItems.bind(this)} />
      );
    }
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
        <section className="content-header">
          <h1>
            My Shopping list Items
            <small>a listing of all your shopping lists items</small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/shoppinglists">
                <i className="fa fa-dashboard" /> Home
              </Link>
            </li>
            <li>
              <Link to="/shoppinglists">Shopping</Link>
            </li>
            <li className="active">List Items</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <div className="box-title">
                    <div className="input-group input-group-sm box-header-btn">
                      <div className="input-group-btn">
                        <Link
                          to={`/shoppinglists/${id}/items/new`}
                          className="btn btn-info form-control pull-right"
                        >
                          Add New List Item
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="box-tools" />
                </div>
                <div className="box-body table-responsive no-padding">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th>ID</th>
                        <th>Item Title</th>
                        <th>Date</th>
                        <th>Details</th>
                        <th className="text-center">Actions</th>
                      </tr>
                      {this.renderListItems()}
                    </tbody>
                  </table>
                </div>
                {this.renderPagination()}
              </div>
            </div>
          </div>
        </section>
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
