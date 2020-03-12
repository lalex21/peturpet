import React from 'react';
import { Provider } from 'react-redux';
import { BreakpointProvider } from 'react-socks';
// import App from '../App/App';
import ComponentsTest from '../ComponentsTest/ComponentsTest';
import Store from '../../Store';

const AppProvider = () => {
  return (
    <Provider store={Store}>
      <BreakpointProvider>
        {/* <App /> */}
        <ComponentsTest />
      </BreakpointProvider>
    </Provider>
  );
};

export default AppProvider;
