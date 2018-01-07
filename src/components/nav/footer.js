import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 1.0.0
        </div>
        <strong>
          Copyright &copy; 2018
          <Link to="#">Patrick Luwum</Link>.
        </strong>{" "}
        All rights reserved.
      </footer>
    );
  }
}

export default Footer;
