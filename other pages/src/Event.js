import React, { Component } from 'react';

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

class Event extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log("Chamly")
  }
  render() {
    return (
      <div className="container">
       
        <Header id={this.props.match.params.id}/>
        <Main id={this.props.match.params.id}/>
        <Footer id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default Event;
