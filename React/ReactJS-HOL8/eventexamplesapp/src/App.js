import React from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 5,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  incrementAndHello = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div>

        <h2>{this.state.count}</h2>

        <button onClick={this.incrementAndHello}>
          Increment
        </button>

        <br />

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br />

        <button
          onClick={() => this.sayWelcome("Welcome")}
        >
          Say Welcome
        </button>

        <br />

        <button onClick={this.onPress}>
          Click on me
        </button>

        <hr />

        <CurrencyConvertor />

      </div>
    );
  }
}

export default App;