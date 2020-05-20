import React, { Component } from "react";
import ListOfResources from "./listOfResources";
import Headline from "./header";

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      msg: "This is React Sessions",
      count: 100
    };
  }
  handleClick = () => {
    console.log("Hi");
    this.setState({ count: this.state.count + 10 });
  };
  render() {
    return (
      <div>
        <Headline />
        <div>This is my component.</div>
        <ListOfResources />
        <button onClick={this.handleClick}>Click Me</button>
        <p>{this.state.msg}</p>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
export default MyComponent;
