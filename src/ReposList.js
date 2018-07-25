import React, { Component } from 'react';
import request from 'request-promise';
import config from './config';
import Repo from './Repo';

class ReposList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }

    this.getRepos = this.getRepos.bind(this);
  }

  getRepos() {
    request.get(`https://api.github.com/users/${this.props.user}/repos?access_token=${config.github_token}`)
      .then(data => {
        this.setState(() => {
          return { repos: JSON.parse(data) }
        })
      });
  }

  componentWillUpdate() { // This will re-reun this.getRepos() when React has determined that the data passed down from parent components has changed
    this.getRepos()
  }

  componentDidMount() { // This runs this.getRepos() after the component has been intially rendered
    this.getRepos()
  }

  render() {
    return (
      <div className="card-text">
        <h6>User's Repositories:</h6>
        <div className="list-group mt-2">
          {this.state.repos.map(repo => <Repo key={repo.id} repo={repo} />)} { /* We can use .map on an array to create a Repo component for each item in that array */ }
        </div>
      </div>
    )
  }
}

export default ReposList;