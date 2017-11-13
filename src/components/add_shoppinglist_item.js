import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList } from '../actions/index';
import ShoppingListItemForm from './shoppinglist_item_form';

class AddShoppingListItem extends Component {

    onSubmit(values) {
        console.log('Form has been submited:', values);
    }

    render() {

        return (
            <div>
                Add item to shopping List
                <ShoppingListItemForm onSubmit={this.onSubmit.bind(this)} />
            </div>
        );
    }
}

export default AddShoppingListItem;