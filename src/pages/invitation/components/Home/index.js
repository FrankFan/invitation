import React, { Component } from 'react';
import './style.scss';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="BROCCOLI & CO." />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;