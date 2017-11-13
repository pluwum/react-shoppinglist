import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListItem } from '../actions/index';
import ShoppingListItemForm from './shoppinglist_item_form';

class EditShoppingListItem extends Component {

    onSubmit(values) {
        console.log('Form has been submited:', values);
    }

    render() {

        return (
            <div>
                Edit Item from shopping list
                <ShoppingListItemForm initialValues={} onSubmit={this.onSubmit.bind(this)} />
            </div>
        );
    }
}

export default EditShoppingListItem;