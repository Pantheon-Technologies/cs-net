import React, { Component } from 'react';
import GithubOauth from '../components/GithubOauth.js';


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to csNET!</h1>
        <GithubOauth />
      </div>
    );
  }
}

export default HomePage;
