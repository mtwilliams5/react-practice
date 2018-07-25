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

  componentWillUpdate() {
    this.getRepos()
  }

  componentDidMount() {
    this.getRepos()
  }

  render() {
    return (
      <div className="card-text">
        <h6>User's Repositories:</h6>
        <div className="list-group mt-2">
          {this.state.repos.map(repo => <Repo key={repo.id} repo={repo} />)}
        </div>
      </div>
    )
  }
}

export default ReposList;