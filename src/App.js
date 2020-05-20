import React, { Component } from "react";
import ListOfResources from "./listOfResources";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <div>This is my component.</div>
        <ListOfResources />
      </div>
    );
  }
}
export default MyComponent;
