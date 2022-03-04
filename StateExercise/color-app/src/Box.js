import React, { Component } from "react";
import "./Box.css";
import { choice } from "./helpers";
class Box extends Component {
  static defaultProps = {
    allColors: ["purple", "lavender", "blue", "cyan", "yellow"],
  };
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.allColors) };
    this.handleClick = this.handleClick.bind(this);
  }
  pickColor() {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }
  handleClick(e) {
    this.pickColor();
  }
  render() {
    return (
      <div
        className="Box"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}

export default Box;
