import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
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
const Login = React.lazy(() => import('../views/Pages/Login'));
const Register = React.lazy(() => import('../views/Pages/Register'));


const DefaultHeader = React.lazy(() => import('./components/CustomNavbar'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">

          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
	  <main className="main">


              <Suspense fallback={this.loading()}>
                <Switch>
                          <Route exact path="/main/home" component={Home} />
			  <Route path="/main/about" component={About} />
			  <Route path="/main/news" component={News} />
			  <Route exact path="/main/login" name="Login Page" render={props => <Login {...props}/>} />
                          <Route path="/main/register" name="Register Page" render={props => <Register {...props}/>} />
			  
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>

          </main>

      </div>
    );
  }
}

export default DefaultLayout;
