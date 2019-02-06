import React from 'react';
import './style.scss';
import Button from '../Button';

const Result = (props) => {
  const {
    onBtnClick,
  } = props;

  return(
    <section className="Result">
      <div className="content">
        <h1>All done!</h1>
        <p className="msg">You will be one of the first to experience Broccoli & Co. when we launch.</p>
        <Button text="OK" onBtnClick={(e) => {onBtnClick()}} />
      </div>
    </section>
  );
}

export default Result;