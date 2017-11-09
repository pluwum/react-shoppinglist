import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingLists extends Component {
    renderItem(item) {
        return (
            <tr key={item.id}>
                <td >{item.name}</td>
            </tr>
        );
    }

    render() {
        console.log('To be displayed', this.props.shoppingLists);
        return (
            <table>
                <thead>
                    <tr>
                        <th>List Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.shoppingLists.map(this.renderItem)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ shoppingLists }) {
    return { shoppingLists }
}
export default connect(mapStateToProps)(ShoppingLists);