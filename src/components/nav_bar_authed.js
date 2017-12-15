import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NavBarAuthed extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                                aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/shoppinglists">Shopping List App</Link>
                        </div>
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
                                    <Link to="/logout">Logout</Link>
                                </li>
                                <li className="dropdown">
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile
              <span className="caret"></span>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="#">Change Password</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Change Email</Link>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <Link to="/logout">Logout</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron"></div>
            </div>
        );
    }
}