import React from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { names: [] };
  }

  componentDidMount() {
    fetch(`${process.env.API_URL || "http://localhost:3100"}/data`)
      .then((response) => response.json())
      .then((response) => {
        console.log('names ......', response);
        this.setState({ names: response })
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <b>Names</b>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;