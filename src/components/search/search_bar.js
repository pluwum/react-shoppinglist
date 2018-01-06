import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchLists } from "../../actions/index";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    // Bind handleInputChange to the components context
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // Handle form submission
  handleFormSubmit(event) {
    event.preventDefault();

    // Go to api and get results
    this.props.searchLists(this.state.term);

    // Clear search field when user clicks search
    //this.setState({ term: '' });
  }

  // Handle user entering search text
  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="navbar-form navbar-nav">
        <div className="form-group">
          <input
            onChange={this.handleInputChange}
            value={this.state.term}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </form>
    );
  }
}

// Connect our fetchLists action creator to the Search Bar container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchLists }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
