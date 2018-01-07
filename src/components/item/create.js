import React, { Component } from "react";
import { connect } from "react-redux";
import { addToList } from "../../actions/index";
import ShoppingListItemForm from "./form";

class AddShoppingListItem extends Component {
  onSubmit(values) {
    console.log("Form has been submited:", values);
    const { listId } = this.props.match.params;
    this.props.addToList(listId, values, () => {
      this.props.history.push(`/shoppinglists/${listId}/items`);
    });
  }

  render() {
    const { listId } = this.props.match.params;

    return (
      <div>
        <ShoppingListItemForm
          onSubmit={this.onSubmit.bind(this)}
          title="Create Shopping list Item"
          listId={listId}
        />
      </div>
    );
  }
}

export default connect(null, { addToList })(AddShoppingListItem);
