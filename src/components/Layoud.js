import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.children}
        <h1>{this.props.footer}</h1>
      </div>
    );
  }
}

export default Layout;