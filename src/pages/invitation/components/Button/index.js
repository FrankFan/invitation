import React from 'react';
import './style.scss';

// from https://www.designrush.com/resources/css3buttongenerator
const Button = (props) => {
  const {
    onBtnClick,
    text,
    disabled,
  } = props;
  return (
    <button disabled={disabled ? 'disabled' : ''} onClick={() => {onBtnClick && onBtnClick()}} className="primary-btn">
      <span>{text}</span>
    </button>
  );
};

export default Button;