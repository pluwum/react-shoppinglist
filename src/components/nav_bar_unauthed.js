import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarUnAuthed extends Component {
    render() {
        return (<div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-brand">Shopping List App</div>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/shoppinglists/auth/register">Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="jumbotron">
            </div>
        </div>);
    }
}

export default NavBarUnAuthed;