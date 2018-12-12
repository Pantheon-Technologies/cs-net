import React, { Component } from 'react';
import AddPost from '../containers/AddPost';
import VisiblePostsList from '../containers/VisiblePostsList';
import HomePage from '../containers/HomePage.js';
import './app.css';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}
