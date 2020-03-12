import React from 'react';
import Button from '../../components/Button/Button.component';

import '../../assets/stylesheets/index.scss';

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
