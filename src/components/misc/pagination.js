import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLists } from "../../actions/index";
import { Link } from "react-router-dom";

class Pagination extends Component {
  handleClick(page) {
    const limit = 4;
    this.props.onClick(page, limit);
  }

  renderLi() {
    var listsItems = [];

    const {
      meta: { has_next, has_prev, next_num, prev_num, page, pages }
    } = this.props;

    // Check if there are previous pages
    if (has_prev) {
      listsItems.push(
        <li key="0">
          <Link to="#" onClick={this.handleClick.bind(this, prev_num)}>
            Previous
          </Link>
        </li>
      );
    }

    // Generating nav for the available pages
    for (var page_num = 1; page_num <= pages; page_num++) {
      listsItems.push(
        <li key={page_num}>
          <Link to="#" onClick={this.handleClick.bind(this, page_num)}>
            {page_num}
          </Link>
        </li>
      );
    }

    // Check if there a next page
    if (has_next) {
      listsItems.push(
        <li key={page_num}>
          <Link to="#" onClick={this.handleClick.bind(this, next_num)}>
            Next
          </Link>
        </li>
      );
    }

    return listsItems;
  }

  render() {
    return (
      <div>
        <ul className="pagination">{this.renderLi()}</ul>
      </div>
    );
  }
}

export default connect(null, { fetchLists })(Pagination);
