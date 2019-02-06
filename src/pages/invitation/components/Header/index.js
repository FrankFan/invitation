import React from 'react';
import './style.scss';

const Header = (props) => {
  return (
    <header className="Header">
      {props.text}
    </header>
  );
}

export default Header;