import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import Characters from "./Characters.json";
import "./App.css";

function shuffleCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    Characters,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "Rad! You're a winner!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Bummer!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = shuffleCharacters(Characters);
    this.setState({ Characters: shuffledCharacters });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Saved by the Bell Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          To play, click on a character from Saved By The Bell! Just be sure not to choose the same cast member you've already selected or you lose! 
        </Title>

        <Container>
          <Row>
            {this.state.Characters.map(Characters => (
              <Column size="md-3 sm-6">
                <CharacterCard
                  key={Characters.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={Characters.id}
                  image={Characters.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;