import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Router from '../Router/router';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary.component';

import '../../assets/stylesheets/index.scss';

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
const AppContainer = ({ aplication, auth }) => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <main>
          <Router isLogin={false} />
        </main>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

AppContainer.propTypes = {
  // auth: PropTypes.bool.isRequired,
  // aplication: PropTypes.oneOfType([PropTypes.object]).isRequired
};

const mapStateToProps = () => ({
  // aplication: state.aplication,
  // auth: state.auth.isLogin
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
