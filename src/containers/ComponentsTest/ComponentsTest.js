import React from 'react';

import Button from '../../components/Button/Button.component';
import Input from '../../components/Input/Input.component';
import StepToStep from '../../components/StepToStep/StepToStep.component';
import Step from '../../components/Step/Step.component';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin.component';

import '../../assets/stylesheets/index.scss';

const App = () => (
  <div>
    <div>Primary</div>
    <Button
      className="primary"
      onClick={() => console.log('testxxx')}
      icon="paw"
    >
      Continúa
    </Button>
    <div>Secondary</div>
    <Button className="secondary" onClick={() => console.log('testxxx')}>
      Continúa 2
    </Button>
    <div>Input</div>
    <Input placeholder="prueba" />
    <div>Input Error</div>
    <Input placeholder="prueba" errorLabel="Este no es un correo válido" />
    <div>Step To Step</div>
    <StepToStep>
      <Step text="pruebita" />
      <Step text="pruebita2" />
    </StepToStep>
    {/* <div>Step To Step Error</div> */}
    {/* <StepToStep /> */}
    <div>Google Login</div>
    <GoogleLogin />
  </div>
);

export default App;
