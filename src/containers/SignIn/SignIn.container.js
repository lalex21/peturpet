/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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

const SignInContainer = ({ routes, ...props }) => {
  console.log('routes_props', props, routes);

  const StepWelcomeDots = {
    right: {
      init: -80,
      to: -80
    },
    left: {
      init: 5,
      to: 5
    }
  };

  const StepServicesDots = {
    right: {
      init: -80,
      to: 20
    },
    left: {
      init: 5,
      to: -80
    }
  };

  const StepFinishDots = {
    right: {
      init: -80,
      to: 80
    },
    left: {
      init: 5,
      to: -110
    }
  };

  return (
    <RouteAnimate outVariant={{ opacity: 1 }}>
      <div className="sign_in_container">
        <StepToStep>
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
            <GroupDots {...StepWelcomeDots} />
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
              <GroupDots {...StepServicesDots} />
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
              <GroupDots {...StepFinishDots} />
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
