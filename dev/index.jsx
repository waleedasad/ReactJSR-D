import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component{
  render() {
    return (
      <p>Hello, {this.props.greetTarget} {this.props.newOne}  {this.props.newTwo}!</p>
    );
  }
}


ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Waleed Asad"/>
    <HelloWorld newOne="Mavericks"/>
    <HelloWorld newTwo="Hollywoood"/>

  </div>,
  document.querySelector("#container")
);
