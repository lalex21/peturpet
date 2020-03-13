import React from 'react';
import { Row, Col } from '../Grid/Grid.component';
import BuildingAnimation from '../../animations/Building/Building.animation';
import LinkComponent from '../Link/Link.component';

import './Building.stylesheet.scss';
import Button from '../Button/Button.component';

const BuildingComponent = () => {
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
          <Button className="secondary">
            <LinkComponent to="/adios">Volver al inicio</LinkComponent>
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default BuildingComponent;
