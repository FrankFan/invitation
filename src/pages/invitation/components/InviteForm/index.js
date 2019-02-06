import React, { Component } from 'react';
import './style.scss';
import Button from '../Button/';

class InviteForm extends Component {
  render() {
    const {
      closeForm,
      formSubmit,
      errorMsg,
    } = this.props;
    return(
      <section className="InviteForm">
        <div
          onClick={(e) => {closeForm(e)}}
          className="closebtn">&times;</div>
        <h2>Request an invite</h2>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Confirm email" />
          <div className="control">
            <Button
              text="Send"
              onBtnClick={formSubmit} />
          </div>
          { errorMsg ? <p className="msg">* Error message from server here.</p> : null}
        </form>
      </section>
    );
  }
}

export default InviteForm;