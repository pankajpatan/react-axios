import React, { Component } from "react";
import axios from "axios";
import Add from "../src/components/Add";
import Header from "../src/components/Header";

const style = {
  h1: {
    textAlign: "center",
    border: "solid 1px",
    margin: "16px auto",
    fontSize: "23px",
    width: "87%",
    height: "48px",
    paddingTop: "11px"
  },
  div: {
    marginTop: "24px"
  }
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { user: [] };
  }

  componentDidMount() {
    axios(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({ user: data });
      });
  }

  render() {
    return (
      <>
        <Header />
        <Add />
        <div style={style.div}>
          {this.state.user.map((item) => (
            <h1 style={style.h1}>{item.name}</h1>
          ))}
        </div>
      </>
    );
  }
}

export default App;
