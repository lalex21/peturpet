import React from 'react';
import PropTypes from '../../utils/PropTypes';

import RouteAnimate from '../../animations/Route/Route.animation';
import Onboarding from '../../templates/Onboarding/Onboarding.template';
import StepToStep from '../../components/StepToStep/StepToStep.component';
// import LinkComponent from '../../components/Link/Link.component';

const SignInContainer = ({ routes }) => {
  console.log('routes', routes);
  return (
    <RouteAnimate outVariant={{ opacity: 1 }}>
      <section>
        <StepToStep>
          <Onboarding
            backgroundColor="#EDC27B"
            description="Bienvenido a Pet ur Pet, para aquellos que aman a sus mascotas"
          >
            <div>hola 1</div>
          </Onboarding>
          <Onboarding
            backgroundColor="#BFC6FF"
            description="Con paseadores, guarderías y más para mimar a tu pet"
          >
            <div>hola 2</div>
          </Onboarding>
          <Onboarding
            backgroundColor="#5A48A3"
            description="Además, puedes mantenerte en contacto con tu mascota, siempre"
          >
            <div>hola 3</div>
          </Onboarding>
        </StepToStep>
      </section>
    </RouteAnimate>
  );
};

SignInContainer.propTypes = {
  routes: PropTypes.objectOf(PropTypes.object).isRequired
};

export default SignInContainer;
