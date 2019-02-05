import React, { Component } from 'react';
import './style.scss';
import Button from '../Button';

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <h1>A better way</h1>
        <h1>to enjoy everyday.</h1>
        <p>Be the first to know when we launch.</p>
        <Button text="Request an invite" />
      </main>
    );
  }
}

export default Main;