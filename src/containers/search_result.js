import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchResults extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>List Name</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { searchResults: state.searchResults }
}