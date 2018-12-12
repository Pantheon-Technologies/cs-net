import React, { Component } from 'react';


class GithubOauth extends Component {
  clickHandler() {
    alert('I was Clicked!');
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.clickHandler}>
          Sign in with Github.
        </a>
      </div>
    );
  }
}

export default GithubOauth;
