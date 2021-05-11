import React from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { names: [], token: '' };
  }

  componentDidMount() {
    fetch(`${process.env.API_URL || "http://localhost:3100"}/data`, { credentials: 'include' })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ names: response.users, token: response.token })
      });
  }

  onLogin = () => {
    fetch(`${process.env.API_URL || "http://localhost:3100"}/login`, { credentials: 'include', method: 'POST' })
      .then((response) => response.text())
      .then((response) => {
        console.log('login ......', response);
      });
  }

  render() {
    const { token } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {token ? (
            "LoggedIn"
          ) : (
            <div>
              <b>Login</b>
              <button onClick={this.onLogin}>Login</button>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;