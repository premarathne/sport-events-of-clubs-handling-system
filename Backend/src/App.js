import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import './App.scss';




const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

//Main Page
//const MainPage = React.lazy(() => import('./mainPage/MainPage'));

//Publish Page
//const PublishPage = React.lazy(() => import('./publishPage/PublishPage'));
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));

 //<Route path="/main" name="Main" render={props => <MainPage {...props}/>} />
 // <Route path="/event" name="Event" render={props => <PublishPage {...props}/>} />
class App extends Component {

  render() {
    return (
      <Router>
          <React.Suspense fallback={loading()}>
            <Switch>

	     
              <Route path="/profile" name="Home" render={props => <DefaultLayout {...props}/>} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />

            </Switch>
          </React.Suspense>
      </Router>
    );
  }
}

export default App;
