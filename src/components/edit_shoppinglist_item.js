import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchListItems, editListItem } from "../actions/index";
import ShoppingListItemForm from "./shoppinglist_item_form";

class EditShoppingListItem extends Component {
  componentDidMount() {
    const { listId } = this.props.match.params;
    this.props.fetchListItems(listId);
  }

  onSubmit(values) {
    console.log("Form has been submited:", values);
    const { history, match: { params: { listId, id } } } = this.props;
    this.props.editListItem(listId, id, values, () => {
      this.props.history.push(`/shoppinglists/${listId}/items`);
    });
  }

  render() {
    const { shoppingListItems, match: { params: { id } } } = this.props;
    return (
      <div>
        <ShoppingListItemForm
          initialValues={shoppingListItems.data[id]}
          onSubmit={this.onSubmit.bind(this)}
          title="Edit Shopping list Item"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingListItems: state.shoppingListItems
  };
}

export default connect(mapStateToProps, {
  fetchListItems,
  editListItem
})(EditShoppingListItem);
