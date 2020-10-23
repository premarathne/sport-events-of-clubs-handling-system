import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Form from "./form";
import Tables from "./Tables";
import Events from "./event";
import ContactUs from "./contactus"
import Complain from "./complain"

class Main extends Component {
  render() {
    return (
      <main>
       
     
        <section className="intro">
		<Router>

		    <Switch>
		      <Route path="/user" name="Main" render={props => <Tables {...props}/>} />
		      <Route path="/event/:id" name="Event" render={props => <Events {...props}/>} />
		      <Route path="/contactus" name="ContactUs"  render={props => <ContactUs {...props}/>} />
		      <Route path="/complain/:id" name="complain"  render={props => <Complain {...props}/>} />
		    </Switch>

      		</Router>
        </section>

       
      </main>
    );
  }
}

export default Main;
