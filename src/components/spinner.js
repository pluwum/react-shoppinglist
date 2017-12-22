import React, { Component } from "react";

var SpinKit = require("react-spinkit");

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1> Relax while we fetch your data </h1>
        </div>
        <div className="row">
          <div className="col-md-6 center-block">
            <SpinKit name="line-spin-fade-loader" color="blue" />
          </div>
        </div>
      </div>
    );
  }
}
