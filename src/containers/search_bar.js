import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }

        // Bind handleInputChange to the components context
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // Handle form submission
    handleFormSubmit(event) {
        event.preventDefault();
        console.log('Search form was submited');
    }

    // Handle user entering search text
    handleInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input
                    onChange={this.handleInputChange}
                    value={this.state.term}
                />
                <button type="submit">Search</button>
            </form>);
    }
}