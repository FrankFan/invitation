import React, { Component } from 'react';
import './style.scss';
import Button from '../Button/';
import { api } from '../../api';
import { validateEmail } from '@/utils/utils';
class InviteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      emailValue: '',
      emailConfirmValue: '',
      displayError: false,
      whichInput: '',
      showInviteResult: false,
      showLoading: false,
      errorMsg: '',
    };
  }

  componentWillUnmount() {
    this.setState({
      showInviteResult: true,
    });
  }

  onNameChange = (event) => {
    const value = event.target.value;
    this.setState({
      nameValue: value,
      displayError: false,
    });
  }

  onEmailChange = (event) => {
    const value = event.target.value;
    this.setState({
      emailValue: value,
      displayError: false,
    });
  }

  onEmailConfimChange = (event) => {
    const value = event.target.value;
    this.setState({
      emailConfirmValue: value,
      displayError: false,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const emailConfirm = event.target[2].value;
    if (!this.check({name, email, emailConfirm})) {
      return;
    }

    this.setState({
      showLoading: true,
    });
    fetch(api, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(response => {
      if (response.status == 200) {
        this.props.closeForm('form');
      } else if(response.status === 400) {
        response.json().then((data) => {
          this.setState({
            showLoading: false,
            errorMsg: data.errorMessage,
          });
        });
      }
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      console.log('finally');
    });

  }

  check = ({name, email, emailConfirm}) => {
    let flag = false;
    if (!name) {
      console.log('name is required');
      this.setState({
        displayError: true,
        whichInput: 'name',
      });
      return flag;
    }
    if (name.length < 3) {
      console.log('name needs to be at least 3 characters long');
      this.setState({
        displayError: true,
        whichInput: 'name',
      });
      return flag;
    }
    if (!email) {
      console.log('email is required');
      this.setState({
        displayError: true,
        whichInput: 'email',
      });
      return flag;
    }
    if (!validateEmail(email)) {
      console.log('email is not valid');
      this.setState({
        displayError: true,
        whichInput: 'email',
      });
      return flag;
    }
    if (!emailConfirm) {
      console.log('confirm email is required');
      this.setState({
        displayError: true,
        whichInput: 'emailConfirm',
      });
      return flag;
    }
    if (!validateEmail(emailConfirm)) {
      console.log('emailConfirm is not valid');
      this.setState({
        displayError: true,
        whichInput: 'emailConfirm',
      });
      return flag;
    }
    if (email !== emailConfirm) {
      console.log('email is not the same as emailConfirm');
      this.setState({
        displayError: true,
        whichInput: 'email',
      });
      return flag;
    }
    return true;
  }

  render() {
    const {
      closeForm,
    } = this.props;
    const {
      nameValue,
      emailValue,
      emailConfirmValue,
      displayError,
      whichInput,
      showLoading,
      errorMsg,
    } = this.state;
    const shake = displayError ? 'animated shake redalert' : '';
    return(
      <section className="InviteForm">
        <div className="closebtn" onClick={(e) => {closeForm(e)}}
          >&times;</div>
        <h2>Request an invite</h2>
        <form onSubmit={this.onFormSubmit}>
          <input className={whichInput === 'name' ? shake : ''} type="text" placeholder="Full name" value={nameValue} onChange={this.onNameChange} />
          <input className={whichInput === 'email' ? shake : ''} type="text" placeholder="Email" value={emailValue} onChange={this.onEmailChange} />
          <input className={whichInput === 'emailConfirm' ? shake : ''} type="text" placeholder="Confirm email" value={emailConfirmValue} onChange={this.onEmailConfimChange} />
          <div className="control">
            <Button disabled={showLoading ? 'disabled' : ''} text={showLoading ? 'Sending...' : 'Send'} />
          </div>
          { errorMsg ? <p className="msg">* {errorMsg}</p> : null}
        </form>
      </section>
    );
  }
}

export default InviteForm;