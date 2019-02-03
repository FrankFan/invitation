import React, { Component } from 'react';
import 'normalize.css';
import '@/common/styles/common.scss';

import AppRouter from './router';

class App extends Component {
  render() {
    return <AppRouter />;
  }
}

export default App;