import React from 'react';
import { connect } from 'react-redux';
import { gapi } from 'gapi-script';
import { Row, Col } from '../Grid/Grid.component';
import BuildingAnimation from '../../animations/Building/Building.animation';

import { logout as logoutAction } from '../../actions/Auth/Auth.action';
import { showLoading as showLoadingAction } from '../../actions/Application/Application.action';

import './Building.stylesheet.scss';
import Button from '../Button/Button.component';
import PropTypes from '../../utils/PropTypes';
import LinkComponent from '../Link/Link.component';

const BuildingComponent = ({ logout, showLoading }) => {
  const Logout = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    showLoading();

    auth2.signOut().then(logout);
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
          <LinkComponent to="/">
            <Button typeButton="primary" paw onClick={Logout}>
              <span>Volver al inicio</span>
            </Button>
          </LinkComponent>
        </div>
      </Col>
    </Row>
  );
};

BuildingComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  showLoading: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
  showLoading: () => dispatch(showLoadingAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingComponent);
