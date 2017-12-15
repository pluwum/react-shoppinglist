import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../actions/index';
import ShoppingListItemForm from './shoppinglist_item_form';

class AddShoppingListItem extends Component {

    onSubmit(values) {
        console.log('Form has been submited:', values);
        const { listId } = this.props.match.params;
        this.props.addToList(listId, values, () => {
            this.props.history.push(`/shoppinglists/${listId}/items`);
        });
    }

    render() {

        return (
            <div>
                <ShoppingListItemForm onSubmit={this.onSubmit.bind(this)} />
            </div>
        );
    }
}

export default connect(null, { addToList })(AddShoppingListItem);