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
      showInviteResult: false,
    };
  }

  onRequestBtnClick = () => {
    console.log(111);
    this.setState({
      showInviteForm: true,
    });
  }

  onFormBgClick = (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName === 'SECTION') {
      this.setState({
        showInviteForm: false,
      });
    }
  }

  onOKClick = () => {
    this.setState({
      showInviteResult: true,
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
        {showInviteForm ? <InviteForm closeForm={this.onFormBgClick} /> : null}
        {showInviteResult ? <Result onClick={this.onOKClick} /> : null}
      </main>
    );
  }
}

export default Main;