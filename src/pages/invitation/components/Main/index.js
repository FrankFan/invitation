import React, { Component } from 'react';
import './style.scss';
import Button from '../Button';
import InviteForm from '../InviteForm';
import Result from '../Result';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInviteForm: false,
    };
  }

  onRequestBtnClick = () => {
    this.setState({
      showInviteForm: true,
    });
  }

  onFormCose = (param) => {
    if (param === 'form') {
      this.setState({
        showInviteForm: false,
        showInviteResult: true,
      });
    } else {
      this.setState({
        showInviteForm: false,
        showInviteResult: false,
      });
    }
  }

  onOKClick = () => {
    this.setState({
      showInviteResult: false,
    });
  }

  render() {
    const {
      showInviteForm,
      showInviteResult,
    } = this.state;
    return (
      <main className="Main">
        <h1>A better way</h1>
        <h1>to enjoy everyday.</h1>
        <p>Be the first to know when we launch.</p>
        <Button
          onBtnClick={this.onRequestBtnClick}
          text="Request an invite" />
        {showInviteForm ?
          <InviteForm closeForm={this.onFormCose} /> : null}
        {showInviteResult ? <Result onBtnClick={this.onOKClick} /> : null}
      </main>
    );
  }
}

export default Main;