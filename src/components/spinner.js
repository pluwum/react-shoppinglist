import React, { Component } from "react";

var SpinKit = require("react-spinkit");

export default class Spinner extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3 well well-lg">
        <h1> Relax while we fetch your data </h1>
        <div className="col-md-offset-6">
          <br />
          <SpinKit name="line-spin-fade-loader" color="blue" />
        </div>
      </div>
    );
  }
}
