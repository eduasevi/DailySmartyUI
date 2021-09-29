import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import { connect, Connect } from "react-redux";
import * as actions from "../actions";

class Results extends Component {
  handleSearchBarSubmit(query) {
    this.props.fetchPostWithQuery;
  }

  render() {
    return (
      <div>
        <Logo size={55} />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
      </div>
    );
  }
}

export default connect(null, actions)(Results);
