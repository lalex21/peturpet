import React, { Component } from 'react';
import { gapi, loadAuth2 } from 'gapi-script';
import { ClientID as GoogleClientID } from '../../constants/Google/GoogleApi';

import Button from '../Button/Button.component';

import './GoogleLogin.stylesheet.scss';

class GoogleLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    const auth2 = await loadAuth2(GoogleClientID, '');

    if (auth2.isSignedIn.get()) {
      this.updateUser(auth2.currentUser.get());
    } else {
      this.attachSignin(document.getElementById('login'), auth2);
    }
  }

  async componentDidUpdate() {
    const { user } = this.state;

    if (!user) {
      const auth2 = await loadAuth2(GoogleClientID, '');
      this.attachSignin(document.getElementById('login'), auth2);
    }
  }

  signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();

    auth2.signOut().then(() => {
      this.setState({ user: null });
      console.log('User signed out.');
    });
  };

  attachSignin(element, auth2) {
    auth2.attachClickHandler(
      element,
      {},
      googleUser => {
        this.updateUser(googleUser);
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  updateUser(currentUser) {
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();

    this.setState({
      user: {
        name,
        profileImg
      }
    });
  }

  render() {
    const { user } = this.state;

    return (
      <>
        {user ? (
          <Button
            text={`${user.name} logout`}
            className="primary"
            onClick={this.signOut}
          />
        ) : (
          <button id="login" className="googlelogin_component" type="button">
            <i className="google" />
          </button>
        )}
      </>
    );
  }
}

GoogleLogin.propTypes = {};

export default GoogleLogin;
