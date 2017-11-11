import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListItems } from '../actions/index';

class ShoppingListItems extends Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.fetchListItems(id);
    }

    renderListItems() {
        return _.map(this.props.shoppingListItems, item => {
            if (!item.id) {
                return (<li key="1">No items found</li>);
            }
            return (<li key={item.id}>{item.name}</li>);
        });
    }

    render() {
        const { shoppingListItems } = this.props;
        console.log('going to show:', shoppingListItems);

        if (!shoppingListItems) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div>Showing A ShoppingList</div>
                <ul>
                    {this.renderListItems()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { shoppingListItems: state.shoppingListItems }
}

export default connect(mapStateToProps, { fetchListItems })(ShoppingListItems);