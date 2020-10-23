import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="container">
      
       
        <Header />
	<Main />
        <Footer />
      </div>
    );
  }
}

export default App;
