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
  const stepDots = [
    [5, -80],
    [-110, 110],
    [-20, -110]
  ];

  const mapStepDots = (step, prevStep) => ({
    right: {
      init: stepDots[prevStep][1],
      to: stepDots[step][1]
    },
    left: {
      init: stepDots[prevStep][0],
      to: stepDots[step][0]
    }
  });

  const [variations, setVariations] = useState(mapStepDots(0, 0));

  const onChangeViewHandle = (step, prevStep) => {
    setVariations(mapStepDots(step, prevStep));
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
              <StepWelcomeAnimation />
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
              <StepServicesAnimation />
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
              <StepFinishAnimation />
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
