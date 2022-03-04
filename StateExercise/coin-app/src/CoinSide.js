import React, { Component } from "react";
import "./CoinSide.css";

class CoinSide extends Component {
  render() {
    return (
      <div className="CoinSide">
        <img src={this.props.info.imgSrc} alt={this.props.info.CoinSide} />
      </div>
    );
  }
}
export default CoinSide;
