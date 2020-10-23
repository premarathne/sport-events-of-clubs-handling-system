import React, { Component} from 'react';
import Nav from "./nav";
import {getOneDetails} from './UserFunctions'
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: '',
      eventID:'',
      eventDetails:[{'img':'2020-05-25T07:40:23.509ZWhatsApp Image 2019-05-21 at 17.52.55.jpeg'}],
    };
     console.log(this.state.img);
  }
  
  componentDidMount() {
      this.state.eventID= this.props.id;

      getOneDetails(this.state.eventID).then(res => {
         if (res) {
         this.setState({ eventDetails : res });
         var x = this.state.eventDetails[0].img.toString()        
         this.setState({	img : 'url('+'"http://localhost:3000/upload/'+x+'"'+')'})         
        console.log(this.state.img);
        console.log(this.state.eventDetails[0].img);
        console.log('Data has been received!!');
        console.log(this.props);

         }
       })
  }

  render() {
  
    return (
     
      <header className="header" style={{backgroundImage:this.state.img,
      					backgroundSize: "100%",
      					height: "700px",
      					backgroundPosition: "center",
      					position: "relative"}}>

      <Nav/>
        <div className="head">
            <h1>{this.state.eventDetails[0].eventName},< br/> We Create</h1>
            <div>
              <p>Integer posuere leo non erat ornare dictum id vitae magna. Proin consectetur iaculis nisi, ut convallis tortor tempor congue. Curabitur sit amet tempus felis. Duis tellus eros, pellentesque at rhoncus eu, maximus ut diam.</p>
              <div><a className="contact" href="#register">Register</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
