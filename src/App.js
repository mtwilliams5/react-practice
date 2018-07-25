import React, { Component } from 'react';
import request from 'request-promise';
import logo from './logo.svg';
import './App.css';
import config from './config';
import UpdateUserForm from './UpdateUser';
import UserProfile from './UserProfile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
    this.getGitHubData = this.getGitHubData.bind(this);
  }

  getGitHubData(user) {
    request.get(`https://api.github.com/users/${user}?access_token=${config.github_token}`)
      .then(data =>
        this.setState(() => {
          return { user: JSON.parse(data) }
        })
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <UpdateUserForm submitAction={this.getGitHubData} /> { /* You can pass functions down for child components to invoke */ }

        {this.state.user.login && <UserProfile user={this.state.user}/>}
      </div>
    );
  }
}

export default App;
