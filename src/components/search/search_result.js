import React, { Component } from "react";
import { connect } from "react-redux";

class SearchResults extends Component {
  renderItem(item) {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
      </tr>
    );
  }

  render() {
    console.log("To be displayed", this.props.searchResults);

    // Check if an array of results is returned
    if (
      !Array.isArray(this.props.searchResults) ||
      !this.props.searchResults.length
    ) {
      return <div>No results found</div>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>List Name</th>
          </tr>
        </thead>
        <tbody>{this.props.searchResults.map(this.renderItem)}</tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { searchResults: state.searchResults };
}
export default connect(mapStateToProps)(SearchResults);
