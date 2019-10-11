import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div id="searchBox" className="pa2">
        <input
          id="searchInput"
          aria-label="Search Robot"
          className={"pa3 ba b--green bg-lightest-blue"}
          type="search"
          placeholder="search robot"
          value={this.props.searchField}
          onChange={this.props.changeInput}
        />
      </div>
    );
  }
}

export default SearchBox;
