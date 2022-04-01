import React, { Component } from "react";
import Card from "./Card";
import './Deck.css'
import axios from "axios";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }
  async getCard() {
    try {
      let cardUrl = `${API_BASE_URL}/${this.state.deck.deck_id}/draw/`;
      let cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error("No cards reamaing");
      }
      let card = cardRes.data.cards[0];
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const cards = this.state.drawn.map((c) => (
      <Card name={c.name} image={c.image} key={c.id} />
    ));
    return (
      <div>
        <h1 className="Deck-title">⬥ Card Dealer ⬥</h1>
        <button className="Deck-btn" onClick={this.getCard}>Get Card!</button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}
export default Deck;
