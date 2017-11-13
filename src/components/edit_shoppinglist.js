import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editList, fetchList } from '../actions/index';
import ShoppingListForm from './shoppinglist_form';

class EditShoppingList extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchList(id);
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
                Edit shopping List
                <ShoppingListForm
                    initialValues={this.props.shoppingList[id]}
                    onSubmit={this.onSubmit.bind(this)} id={id} />
            </div>
        );
    }
}

function mapStateToprops(state) {
    return {
        shoppingList: state.shoppingList
    }
}

export default connect(mapStateToprops, {
    editList,
    fetchList
})(EditShoppingList);