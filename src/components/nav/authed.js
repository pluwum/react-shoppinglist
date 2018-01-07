import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/search_bar";
import { logoutUser } from "../../actions/index";
import { connect } from "react-redux";

class NavBarAuthed extends Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.logoutUser(() => {
      window.location = "/";
    });
  }

  componentWillUnmount() {
    document.body.classList.remove("skin-blue", "sidebar-collapse");
  }
  componentDidMount() {
    document.body.classList.add("skin-blue", "sidebar-collapse");
  }

  render() {
    return (
      <header className="main-header">
        <Link to="/shoppinglists" className="logo">
          <span className="logo-mini">
            <b>L</b>IST
          </span>

          <span className="logo-lg">
            <b>Shopping</b>LIST
          </span>
        </Link>

        <nav className="navbar navbar-static-top">
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src="/img/avatar5.png"
                    className="user-image"
                    alt="User Image"
                  />
                  <span className="hidden-xs">Patrick Luwum</span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img
                      src="/img/avatar5.png"
                      className="img-circle"
                      alt="User Image"
                    />

                    <p>
                      Patrick Luwum - Software Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  <li className="user-footer">
                    <div className="pull-left">
                      <Link
                        to="/shoppinglists/password/change"
                        className="btn btn-default btn-flat"
                      >
                        Change Password
                      </Link>
                    </div>
                    <div className="pull-right">
                      <Link
                        to="#"
                        className="btn btn-default btn-flat"
                        onClick={() => this.handleLogout(event)}
                      >
                        Sign out
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="#" data-toggle="control-sidebar">
                  <i className="fa fa-gears" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect(null, { logoutUser })(NavBarAuthed);
