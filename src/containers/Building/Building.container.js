import React from 'react';
import RouteAnimate from '../../animations/Route/Route.animation';
import LayoutTemplate from '../../templates/Layout/Layout.template';
import Building from '../../components/Building/Building.component';
// import PropTypes from '../../utils/PropTypes';

// import LinkComponent from '../../components/Link/Link.component';
import './Building.stylesheet.scss';

const BuildingContainer = ({ routes }) => {
  const show = false;
  console.log(show, routes);
  return (
    <RouteAnimate className="building_container">
      <LayoutTemplate full center>
        <Building />
      </LayoutTemplate>
    </RouteAnimate>
  );
};

export default BuildingContainer;
