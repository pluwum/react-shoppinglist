import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NavBarAuthed from "../nav/authed";
import Footer from "../nav/footer";
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

    return (
      <Route
        {...rest}
        render={props => {
          if (this.isLoggedIn()) {
            return (
              <div className="wrapper">
                <NavBarAuthed />
                <div className="content-wrapper">
                  <Component {...props} />
                </div>
                <Footer />
              </div>
            );
          }
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          );
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.authData.isLoggedIn
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
