import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList } from '../actions/index';

class AddShoppingListItem extends Component {

    onSubmit(values) {
        console.log('Form has been submited:', values);
    }

    render() {

        return (
            <div>
                Add item to shopping List
            </div>
        );
    }
}

export default AddShoppingListItem;