import React from 'react';
import Button from '../../components/Button/Button.component';

const App = () => (
  <div>
    <div>Hola</div>
    <div>Hola2</div>
    <Button
      className="sweet_pink"
      text="Continúa"
      onClick={() => console.log('testxxx')}
    />
  </div>
);

export default App;
