
import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';


import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Infor from './components/Infor';
import EventRegister from './components/EventRegister';
// sidebar nav config
import navigation from './_nav';
// routes config
import routes from './routes';
const Login = React.lazy(() => import('../views/Pages/Login'));
const Register = React.lazy(() => import('../views/Pages/Register'));

//const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

 

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
          <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">

            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                <Route exact path="/event/home/:id" component={Home} />
                <Route path="/event/infor" component={Infor} />
                <Route path="/event/news" component={News} />
                <Route path="/event/eventRegister" component={EventRegister} />
                <Route path="/event/login" name="Login Page" render={props => <Login {...props}/>} />
                <Route path="/event/register" name="Register Page" render={props => <Register {...props}/>} />
                <Redirect from="/" to="/event/home" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>

            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
