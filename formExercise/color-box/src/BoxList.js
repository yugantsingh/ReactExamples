import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  }
  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        height={box.height}
        width={box.width}
        color={box.color}
        key={box.id}
        id={box.id}
        removeBox={this.remove}
      />
    ));
    return (
      <div>
        <h1>Color Box Maker</h1>
        <div>{boxes}</div>
        <NewBoxForm createBox={this.create} />
      </div>
    );
  }
}
export default BoxList;
