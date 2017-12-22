import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../containers/search_bar";
import { logoutUser } from "../actions/index";
import { connect } from "react-redux";

class NavBarAuthed extends Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.logoutUser(() => {
      window.location = "/";
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link className="navbar-brand" to="/shoppinglists">
                Shopping List App
              </Link>
            </div>

            <SearchBar />

            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/shoppinglists">View Lists</Link>
                </li>
                <li>
                  <Link to="/shoppinglists/new">New List</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="#" onClick={() => this.handleLogout(event)}>
                    Logout
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Profile
                    <span className="caret" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/shoppinglists/password/change">
                        Change Password
                      </Link>
                    </li>
                    <li role="separator" className="divider" />
                    <li>
                      <Link to="#" onClick={() => this.handleLogout(event)}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="jumbotron" />
      </div>
    );
  }
}

export default connect(null, { logoutUser })(NavBarAuthed);
