import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts_wrapper">
          <div className="recent-posts_heading">Recent posts</div>
          <ul className="recent-posts_posts">
            <li>recent post 0</li>
            <li>recent post 1</li>
            <li>recent post 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
