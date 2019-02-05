import React, { Component } from 'react';
import './style.scss';

// from https://www.designrush.com/resources/css3buttongenerator
class Button extends Component {
  render() {
    return (
      <button className="primary-btn">
        <span>{this.props.text}</span>
      </button>
    );
  }
}

export default Button;