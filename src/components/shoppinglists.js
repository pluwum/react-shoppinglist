import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/index';
import { Link } from 'react-router-dom';

class ShoppingLists extends Component {
    componentDidMount() {
        this.props.fetchLists();
    }

    renderShoppingLists() {
        return _.map(this.props.shoppingLists, shoppinglist => {
            return (<li key={shoppinglist.id}>
                <Link to={`/shoppinglists/${shoppinglist.id}`}> {shoppinglist.name}</Link>
                <Link to={`/shoppinglists/${shoppinglist.id}/edit`}> Edit</Link>
            </li>);
        });
    }

    render() {
        console.log("Loaded lists:", this.props.shoppingLists);
        if (!this.props.shoppingLists) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div>
                    <Link className="btn btn-primary" to="/shoppinglists/new">Add Shopping List</Link>
                </div>
                <h1>ShoppingLists</h1>
                <ul>
                    {this.renderShoppingLists()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { shoppingLists: state.shoppingLists }
}

export default connect(mapStateToProps, { fetchLists })(ShoppingLists);