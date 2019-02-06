import React, { Component } from 'react';
import './style.scss';
import Button from '../Button/';

class InviteForm extends Component {
  render() {
    const {
      onClick,
      closeForm,
    } = this.props;
    return(
      <section onClick={(e) => {closeForm(e)}} className="InviteForm">
        <h2>Request an invite</h2>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Confirm email" />
          <div className="control">
            <Button text="Send" onClick={onClick && onClick()} />
          </div>
          <p className="msg">* Error message from server here.</p>
        </form>
      </section>
    );
  }
}

export default InviteForm;