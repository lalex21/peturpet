import React from 'react';
import BuildingAnimation from '../../animations/Building/Building.animation';

// import LinkComponent from '../../components/Link/Link.component';
import './Building.stylesheet.scss';

const BuildingComponent = () => {
  return (
    <div className="building_component">
      <BuildingAnimation />
    </div>
  );
};

export default BuildingComponent;
