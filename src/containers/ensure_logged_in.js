import React, { Component } from 'react';

class EnsureLoggedIn extends Component {
    componentDidMount() {
        if (!isLoggedIn) {
            // redirect user to login page
            this.history.push("/");
        }
    }
    render() {
        console.log('You are not loggedßßß', this.props);
        if (isLoggedIn) {
            return this.props.children
        } else {
            return null
        }
    }
}

export default EnsureLoggedIn;