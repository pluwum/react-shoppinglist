import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
    renderItem(item) {
        return (
            <tr key={item.id}>
                <td >{item.name}</td>
            </tr>
        );
    }

    render() {
        console.log('To be displayed', this.props.searchResults);
        return (
            <table>
                <thead>
                    <tr>
                        <th>List Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.searchResults.map(this.renderItem)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ searchResults }) {
    return { searchResults }
}
export default connect(mapStateToProps)(SearchResults);