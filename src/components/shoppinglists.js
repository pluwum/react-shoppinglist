import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/index';

class ShoppingLists extends Component {
    componentDidMount() {
        this.props.fetchLists();
    }

    renderShoppingLists() {
        return _.map(this.props.shoppingLists, shoppinglist => {
            return (<li key={shoppinglist.id}>{shoppinglist.name}</li>);
        });
    }

    render() {
        console.log("Loaded lists:", this.props.shoppingLists);
        return (
            <div>
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