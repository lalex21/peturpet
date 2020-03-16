/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from '../../utils/PropTypes';

import RouteAnimate from '../../animations/Route/Route.animation';
import Onboarding from '../../templates/Onboarding/Onboarding.template';
import StepToStep from '../../components/StepToStep/StepToStep.component';
import StepFinishAnimation from '../../animations/SignIn/StepFinish/StepFinish.animation';
import StepWelcomeAnimation from '../../animations/SignIn/StepWelcome/StepWelcome.animation';
import StepServicesAnimation from '../../animations/SignIn/StepServices/StepServices.animation';
import GroupDots from '../../components/GroupDots/GroupDots.component';
// import LinkComponent from '../../components/Link/Link.component';

import './SignIn.stylesheet.scss';

const SignInContainer = () => {
  const stepDotValues = [
    [5, -80],
    [-110, 110],
    [-20, -110]
  ];

  const stepLeafValues = [
    // Step 1
    // Leaf1, Leaf2, Leaf3
    [
      { y: 40, rotate: 18 },
      { x: 0, y: 0, rotate: 0 },
      { x: 0, y: 0, rotate: 0 }
    ],
    // Step 2
    [
      { y: 40, rotate: -15 },
      { x: 20, y: -20, rotate: 20, opacity: 1 },
      { x: -29, y: -14, rotate: -50, opacity: 1 }
    ], // -20
    // Step 3
    [
      { y: 0, rotate: -15 },
      { x: 120, y: -50, rotate: 20, opacity: 0 },
      { x: -29, y: -40, rotate: -50, opacity: 0.8 }
    ]
  ];

  const mapStepValues = (step, prevStep) => ({
    right: {
      init: stepDotValues[prevStep][1],
      to: stepDotValues[step][1]
    },
    left: {
      init: stepDotValues[prevStep][0],
      to: stepDotValues[step][0]
    },
    leaf1: {
      init: stepLeafValues[prevStep][0],
      to: stepLeafValues[step][0]
    },
    leaf2: {
      init: stepLeafValues[prevStep][1],
      to: stepLeafValues[step][1]
    },
    leaf3: {
      init: stepLeafValues[prevStep][2],
      to: stepLeafValues[step][2]
    }
  });

  const [variations, setVariations] = useState(mapStepValues(0, 0));

  const onChangeViewHandle = (step, prevStep) => {
    setVariations(mapStepValues(step, prevStep));
  };

  return (
    <RouteAnimate outVariant={{ opacity: 1 }}>
      <div className="sign_in_container">
        <StepToStep onChangeView={onChangeViewHandle}>
          <Onboarding
            backgroundColor="#EDC27B"
            description="Bienvenido a Pet ur Pet, para aquellos que aman a sus mascotas"
          >
            <div
              className="sign_in_container--bubble"
              style={{
                backgroundColor: '#FEC9BE'
              }}
            >
              <StepWelcomeAnimation {...variations} />
            </div>
            <GroupDots {...variations} />
          </Onboarding>
          <Onboarding
            backgroundColor="#BFC6FF"
            description="Con paseadores, guarderías y más para mimar a tu pet"
          >
            <div
              className="sign_in_container--bubble"
              style={{
                backgroundColor: '#F5DAAD'
              }}
            >
              <StepServicesAnimation {...variations} />
              <GroupDots {...variations} />
            </div>
          </Onboarding>
          <Onboarding
            backgroundColor="#5A48A3"
            description="Además, puedes mantenerte en contacto con tu mascota, siempre"
          >
            <div
              className="sign_in_container--bubble"
              style={{
                backgroundColor: '#BFC6FF'
              }}
            >
              <StepFinishAnimation {...variations} />
              <GroupDots {...variations} />
            </div>
          </Onboarding>
        </StepToStep>
      </div>
    </RouteAnimate>
  );
};

SignInContainer.propTypes = {
  routes: PropTypes.objectOf(PropTypes.object).isRequired
};

export default SignInContainer;
