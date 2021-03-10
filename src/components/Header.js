import React, { Component } from "react";
const h1 = {
  textAlign: "center",
  backgroundColor: "blue",
  color: "white",
  height: "63px",
  paddingTop: "10px"
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1 style={h1}>Digikull Students</h1>;
  }
}

export default Header;
