import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./form";
import Events from "./upcommingevents"
import AboutUs from "./aboutus"
import ContactUs from "./contactus"
import {getEventDetails} from './UserFunctions'


class Main extends Component {

  
  render() {
    return (
      <main>
     
       <Router>

		    <Switch>
		      <Route path="/aboutus" name="AboutUs" render={props => <AboutUs {...props}/>} />
		      <Route path="/events" name="Event" render={props => <Events {...props}/>} />
		      <Route path="/contactus" name="ContactUs"  render={props => <ContactUs {...props}/>}/>
		    </Switch>

      	</Router>
      		
      </main>
    );
  }
}

export default Main;
