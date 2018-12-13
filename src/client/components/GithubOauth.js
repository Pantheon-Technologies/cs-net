import React, { Component } from 'react';


class GithubOauth extends Component {
  render() {
    return (
      <div>
        <a href="https://github.com/login/oauth/authorize?client_id=5f60818f890a97fad992&scope=read:org">
          Sign in with Github.
        </a>
      </div>
    );
  }
}

export default GithubOauth;
