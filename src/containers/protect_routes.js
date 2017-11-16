
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class ProtectedRoute extends Component {
    isLoggedIn() {
        const access_token = sessionStorage.getItem("access_token");
        if (access_token) {
            return true;
        }
        return false;
    }
    render() {
        const { isLoggedIn, component: Component, ...rest } = this.props;
        //console.log('Yay!! Look at my props!!!!', props.location);
        return (
            <Route {...rest} render={props => (
                this.isLoggedIn() ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{
                            pathname: '/',
                            state: { from: props.location }
                        }} />
                    )
            )} />
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authData.isLoggedIn
    }
}

export default connect(mapStateToProps)(ProtectedRoute);