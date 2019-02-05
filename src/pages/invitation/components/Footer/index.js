import React, { Component } from 'react';
import './style.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <p>Made with <i>❤</i> in Shanghai.</p>
        <p>&copy; Broccoli & Co. All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;