import React, { Component } from 'react';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>BROCCOLI & CO.</header>
        <main>main</main>
        <footer>
          <p>Made with <i>❤</i> in Shanghai.</p>
          <p>&copy; Broccoli & Co. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;