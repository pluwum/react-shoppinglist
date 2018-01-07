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
      <form onSubmit={this.handleFormSubmit}>
        <div className="input-group input-group-sm box-header-search">
          <input
            onChange={this.handleInputChange}
            value={this.state.term}
            type="text"
            name="table_search"
            className="form-control pull-right"
            placeholder="Search"
          />

          <div className="input-group-btn">
            <button type="submit" className="btn btn-default">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

// Connect our fetchLists action creator to the Search Bar container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchLists }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
