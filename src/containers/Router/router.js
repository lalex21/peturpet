import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Routes, { RoutesNoAuth } from '../../constants/routes';
import SplashContainer from '../Splash/Splash.container';

export const CreateSwitchRouter = ({ routes }) => {
  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      {Object.keys(routes).map(route => {
        const { exact = true, path, component, redirect, props = {} } = routes[
          route
        ];
        return (
          <Route
            key={route}
            exact={exact}
            path={path}
            render={propsRouter => {
              if (redirect) {
                return <Redirect to={routes[redirect].path} />;
              }
              const customProps = {
                ...props,
                ...propsRouter,
                routes
              };
              return React.createElement(component, customProps);
            }}
          />
        );
      })}
    </Switch>
  );
};

CreateSwitchRouter.propTypes = {
  /**
   * Object with all routes available
   *
   * @type {object}
   */
  routes: PropTypes.objectOf(PropTypes.object).isRequired
};

const RouterContainer = ({ isLogin, isLoading }) => {
  if (isLoading) {
    return <SplashContainer />;
  }
  return <CreateSwitchRouter routes={isLogin ? Routes : RoutesNoAuth} />;
};

RouterContainer.defaultProps = {
  //   loading: false
};

RouterContainer.propTypes = {
  /**
   * if the user has an active session
   *
   * @type {(true|false)}
   */
  isLogin: PropTypes.bool.isRequired
  /**
   * if the user has an session loading
   *
   * @type {(true|false)}
   */
  //   loading: PropTypes.bool
};

export default RouterContainer;
