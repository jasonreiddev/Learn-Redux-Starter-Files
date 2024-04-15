import React from "react";
import { Link } from "react-router";

export const Main = React.createClass({
  render() {
    return (
      <div className="main">
        <h1>
          <Link to="/">Reduxstagaram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  },
});
