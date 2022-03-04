import React, { Component } from "react";
import { choice } from "./methods.js";
import CoinSide from "./CoinSide.js";

class Coin extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc: "https://www.ramint.gov.au/file/401/download?token=SjitG6Pn",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    let newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nTails: st.nTails + (newCoin.side === "heads" ? 1 : 0),
        nHeads: st.nHeads + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="Coin">
        <h2>Let's Flip a Coin</h2>
        {this.state.currCoin && <CoinSide info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.nFlips} flips, We have {this.state.nHeads} Heads
          and {this.state.nTails} Tails.
        </p>
      </div>
    );
  }
}

export default Coin;
