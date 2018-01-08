import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteList, fetchLists } from "../../actions/index";
import { Link } from "react-router-dom";
import Spinner from "../misc/spinner";
import Pagination from "../misc/pagination";
import SearchBar from "../search/search_bar";

class ShoppingLists extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  handleDelete(id) {
    console.log("You are trying to delete:", id);
    this.props.deleteList(id, () => {
      this.props.history.push("/shoppinglists/");
    });
  }

  renderShoppingLists() {
    // Check if there data is not passed or if data is empty (helpful for search)
    const { shoppingLists: { data, meta } } = this.props;
    if (!data || !_.size(data)) {
      return (
        <tr>
          <td colSpan="5">
            <div className="alert alert-success">
              <strong>Opps! </strong> You have no Shopping Lists matching this
              query at the moment :-(. To create one, click{" "}
              <Link to="/shoppinglists/new">here</Link>
            </div>
          </td>
        </tr>
      );
    }
    return _.map(this.props.shoppingLists.data, shoppinglist => {
      return (
        <tr key={shoppinglist.id}>
          <td>{shoppinglist.id}</td>
          <td> {shoppinglist.name}</td>
          <td>{shoppinglist.date_created}</td>
          <td>{shoppinglist.description}</td>

          <td className="text-center">
            <div className="btn-group">
              <Link
                to={`/shoppinglists/${shoppinglist.id}/items`}
                className="btn  btn-primary btn-sm btn-space"
              >
                View
              </Link>
              <Link
                to={`/shoppinglists/${shoppinglist.id}/edit`}
                className="btn  btn-success btn-sm btn-space"
              >
                Edit
              </Link>
              <button
                className="btn  btn-danger btn-sm"
                onClick={() => this.handleDelete(shoppinglist.id)}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      );
    });
  }

  renderPagination() {
    const { shoppingLists: { data, meta } } = this.props;

    if (data || _.size(data)) {
      return <Pagination meta={meta} onClick={this.props.fetchLists} />;
    }
  }

  render() {
    console.log("Loaded lists:", this.props.shoppingLists);

    const {
      shoppingLists: { data, isFetching, error, message, meta }
    } = this.props;

    if (error) {
      return (
        <div className="alert alert-danger">
          <strong>Opps! </strong> Something went terribly wrong
        </div>
      );
    }

    if (isFetching) {
      return <Spinner />;
    }

    return (
      <div>
        <section className="content-header">
          <h1>
            My Shopping lists
            <small>a listing of all your shopping lists</small>
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
            <li className="active">Lists</li>
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
                          to="/shoppinglists/new"
                          className="btn btn-info form-control pull-right"
                        >
                          Add New List
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="box-tools">
                    <SearchBar />
                  </div>
                </div>
                <div className="box-body table-responsive no-padding">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th>ID</th>
                        <th>List Title</th>
                        <th>Date</th>
                        <th>Details</th>
                        <th className="text-center">Actions</th>
                      </tr>
                      {this.renderShoppingLists()}
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
  return {
    shoppingLists: state.shoppingLists,
    authData: state.shoppingListItems.data
  };
}

export default connect(mapStateToProps, { deleteList, fetchLists })(
  ShoppingLists
);
