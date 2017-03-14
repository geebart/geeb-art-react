import React from "react";
import ReactDOM from "react-dom";

export default class ScrollSnapTo extends React.Component {

  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollTop = 0;
  }

  render() {
    return(
      <div>
        {/*  */}
      </div>
    );
  }
}
