import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editList, fetchLists } from '../actions/index';
import ShoppingListForm from './shoppinglist_form';

class EditShoppingList extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchLists(id);
    }

    onSubmit(values) {
        console.log('Form has been submited:', values);
        // Create shopping list and then redirect to list views
        const { id } = this.props.match.params;
        this.props.editList(id, values, () => {
            this.props.history.push('/shoppinglists/');
        });
    }

    render() {
        const { id } = this.props.match.params;
        return (
            <div>
                <ShoppingListForm
                    initialValues={this.props.shoppingLists[id]}
                    onSubmit={this.onSubmit.bind(this)} id={id} />
            </div>
        );
    }
}

function mapStateToprops(state) {
    return {
        shoppingLists: state.shoppingLists
    }
}

export default connect(mapStateToprops, {
    editList,
    fetchLists
})(EditShoppingList);