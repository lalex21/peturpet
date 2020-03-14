import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gapi, loadAuth2 } from 'gapi-script';
import { ClientID as GoogleClientID } from '../../constants/AppParams';

import Button from '../Button/Button.component';

import './GoogleLogin.stylesheet.scss';
import PropTypes from '../../utils/PropTypes';
import { login, logout } from '../../actions/Auth/Auth.action';

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
      this.setState({ user: null }, () => {
        const { googleLogout } = this.props;

        console.log('User signed out.');
        googleLogout();
      });
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

    this.setState(
      {
        user: {
          name,
          profileImg
        }
      },
      () => {
        const { googleLogin } = this.props;
        googleLogin();
      }
    );
  }

  render() {
    const { user } = this.state;
    const { isLogin } = this.props;

    return (
      <>
        {user && isLogin ? (
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

GoogleLogin.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  googleLogin: PropTypes.func.isRequired,
  googleLogout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin
});

const mapDispatchToProps = dispatch => ({
  googleLogin: () => dispatch(login()),
  googleLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogin);
