import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Event from "./Event"

class App extends Component {
  render() {
    return (
		<Router>

		    <Switch>
		      <Route path="/event/:id" name="Main" render={props => <Event {...props}/>} />
		    </Switch>

      		</Router>
    );
  }
}

export default App;
