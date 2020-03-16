import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAuth2 } from 'gapi-script';
import { motion, AnimatePresence } from 'framer-motion';
import { setDefaultBreakpoints } from 'react-socks';

import { ClientID as GoogleClientID } from '../../constants/AppParams';

import Router from '../Router/router';
import PropTypes from '../../utils/PropTypes';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary.component';

import { login as loginAction } from '../../actions/Auth/Auth.action';
import { hideLoading as hideLoadingAction } from '../../actions/Application/Application.action';

import '../../assets/stylesheets/index.scss';

setDefaultBreakpoints([
  { xs: 0 },
  { sm: 576 },
  { md: 768 },
  { lg: 992 },
  { xl: 1200 }
]);

// import Layout from '../../components/Layout/Layout.component';
// import Header from '../Header/Header.component';
// import Footer from '../Footer/Footer.component';
// import Sidebar from '../Sidebar/Sidebar.component';
// import Main from '../Main/Main.component';

// <Layout
//         aplication={aplication}
//         loading={apiJanosReducer}
//         typeLogin={auth}
//         renderHeader={<Header />}
//         renderSidebar={<Sidebar />}
//         renderFooter={<Footer infoLogin={auth} />}
//       >
//         <Main
//           loading={
//             auth &&
//             aplication.isLoading &&
//             aplication.companySelected.IdEmpleador
//           }
//           title={titulo}
//           description={cuerpo}
//         >
//           <Router isLogin={auth} loading={apiJanosReducer} />
//         </Main>
//       </Layout>

// eslint-disable-next-line no-unused-vars
const AppContainer = ({ auth, isLoading, login, hideLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      loadAuth2(GoogleClientID, '')
        .then(auth2 => {
          if (auth2.isSignedIn.get()) {
            login();
          }
        })
        .finally(() => hideLoading());
    }, 1000);
  });

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AnimatePresence exitBeforeEnter>
          <motion.div exit={{ opacity: 0 }}>
            <main>
              <Router isLogin={auth} isLoading={isLoading} />
            </main>
          </motion.div>
        </AnimatePresence>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

AppContainer.propTypes = {
  auth: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  hideLoading: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth.isLogin,
  isLoading: state.application.isLoading
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginAction()),
  hideLoading: () => dispatch(hideLoadingAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
