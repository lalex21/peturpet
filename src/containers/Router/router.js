import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Routes, { RoutesNoAuth } from '../../constants/routes';

export const CreateSwitchRouter = ({ routes }) => {
  return (
    <Switch>
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
                routes: Routes
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

const RouterContainer = ({ isLogin }) => {
  //   if (isLogin) {
  //     return loading ? (
  //       <AsDialogLoader
  //         center
  //         className="routes__switch--loader"
  //         title="¡Estamos cargando la mejor experiencia para ti!"
  //         description="Hagamos que las cosas pasen como quieres que pasen"
  //       />
  //     ) : (
  //       <>
  //         <IdleTimer
  //           timeout={3}
  //           onRunOut={MsalService.logout}
  //           warningTime={2}
  //           warningMessage="Lleva 3 minutos de inactividad. En 2 minutos su sesión será cerrada si no presenta ninguna actividad"
  //         />
  //         <CreateSwitchRouter routes={Routes} />
  //       </>
  //     );
  //   }
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
