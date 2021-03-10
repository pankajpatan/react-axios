import React, { Component } from "react";
import axios from "axios";
const mystyle = {
  input: {
    textAlign: "center",
    marginTop: "16px"
  }
};
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => console.error());
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div style={mystyle.input}>
            <h1> Hello User</h1>
            <input type="text" name="name" onChange={this.handleChange} />

            <button type="submit">Add</button>
          </div>
        </form>
      </>
    );
  }
}

export default Add;
