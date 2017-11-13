import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListItems, deleteList, deleteListItem } from '../actions/index';
import { Link } from 'react-router-dom';

class ShoppingListItems extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchListItems(id);
    }

    renderListItems() {
        const { id } = this.props.match.params;
        return _.map(this.props.shoppingListItems, item => {
            if (!item.id) {
                return (<li key="1">No items found</li>);
            }
            return (
                <li key={item.id}>
                    {item.name}
                    <Link to={`/shoppinglists/${id}/items/${item.id}`}>Edit</Link>
                    <button className="btn btn-danger"
                        onClick={() => this.handleItemDelete(item.id)}>Delete</button>
                </li>);
        });
    }

    handleItemDelete(itemId) {
        const listId = this.props.match.params.id;
        console.log('You are trying to delete:', itemId);
        this.props.deleteListItem(listId, itemId, () => {
            this.props.history.push(`/shoppinglists/${listId}`);
        });
    }

    handleDelete() {
        const { id } = this.props.match.params;
        console.log('You are trying to delete:', id);
        this.props.deleteList(id, () => {
            this.props.history.push('/shoppinglists/');
        });
    }

    render() {
        const { shoppingListItems } = this.props;
        const { id } = this.props.match.params;
        console.log('going to show:', shoppingListItems);

        if (!shoppingListItems) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/shoppinglists">Back to lists</Link>
                <Link to={`/shoppinglists/${id}/items/new`}>Add Item</Link>
                <button onClick={this.handleDelete.bind(this)}>Delete</button>
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

export default connect(mapStateToProps, { fetchListItems, deleteList, deleteListItem })(ShoppingListItems);