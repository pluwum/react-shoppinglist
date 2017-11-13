import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListItems } from '../actions/index';
import ShoppingListItemForm from './shoppinglist_item_form';

class EditShoppingListItem extends Component {

    componentDidMount() {
        const { listId } = this.props.match.params;
        this.props.fetchListItems(listId);
    }

    onSubmit(values) {
        console.log('Form has been submited:', values);
    }

    render() {
        const { id } = this.props.match.params;
        return (
            <div>
                Edit Item from shopping list
                <ShoppingListItemForm initialValues={this.props.shoppingListItems[id]} onSubmit={this.onSubmit.bind(this)} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        shoppingListItems: state.shoppingListItems
    }
}

export default connect(mapStateToProps, { fetchListItems })(EditShoppingListItem);