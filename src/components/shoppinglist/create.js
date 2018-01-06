import React, { Component } from "react";
import { connect } from "react-redux";
import { createList } from "../../actions/index";
import ShoppingListForm from "./form";

class CreateShoppingList extends Component {
  onSubmit(values) {
    console.log("Form has been submited:", values);
    // Create shopping list and then redirect to list views
    this.props.createList(values, () => {
      this.props.history.push("/shoppinglists/");
    });
  }

  render() {
    return (
      <div>
        <ShoppingListForm
          onSubmit={this.onSubmit.bind(this)}
          title="Create Shopping list"
        />
      </div>
    );
  }
}

export default connect(null, { createList })(CreateShoppingList);
