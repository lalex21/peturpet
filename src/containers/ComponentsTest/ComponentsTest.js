import React from 'react';

import Button from '../../components/Button/Button.component';
import Input from '../../components/Input/Input.component';

import '../../assets/stylesheets/index.scss';

const App = () => (
  <div>
    <div>Primary</div>
    <Button
      className="primary"
      text="Continúa"
      onClick={() => console.log('testxxx')}
      icon="paw"
    />
    <div>Secondary</div>
    <Button
      className="secondary"
      text="Continúa 2"
      onClick={() => console.log('testxxx')}
    />
    <div>Input</div>
    <Input placeholder="prueba" />
    <div>Input Error</div>
    <Input placeholder="prueba" errorLabel="Este no es un correo válido" />
  </div>
);

export default App;
