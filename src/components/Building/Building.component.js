import React from 'react';
import { connect } from 'react-redux';
import { gapi } from 'gapi-script';
import { Row, Col } from '../Grid/Grid.component';
import BuildingAnimation from '../../animations/Building/Building.animation';

import { logout as logoutAction } from '../../actions/Auth/Auth.action';
import {
  showLoading as showLoadingAction,
  hideLoading as hideLoadingAction
} from '../../actions/Application/Application.action';

import './Building.stylesheet.scss';
import Button from '../Button/Button.component';
import PropTypes from '../../utils/PropTypes';

const BuildingComponent = ({ logout, showLoading, hideLoading }) => {
  const Logout = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    showLoading();

    auth2
      .signOut()
      .then(logout)
      .finally(hideLoading);
  };

  return (
    <Row className="building_component">
      <Col md={12} lg={6} className="building_component--svg">
        <BuildingAnimation className="hola" />
      </Col>
      <Col md={12} lg={6} className="building_component--info">
        <h1 className="building_component--info-title bold">¡Lo sentimos!</h1>
        <p className="building_component--info-description">
          Esta sección está en construcción, pronto podrás disfrutar de todos
          nuestros servicios.
        </p>
        <div className="building_component--info-button">
          <Button className="secondary" onClick={Logout}>
            <span>Volver al inicio</span>
          </Button>
        </div>
      </Col>
    </Row>
  );
};

BuildingComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  showLoading: PropTypes.func.isRequired,
  hideLoading: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
  showLoading: () => dispatch(showLoadingAction()),
  hideLoading: () => dispatch(hideLoadingAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingComponent);
