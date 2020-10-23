import React, { Component } from 'react';
import Form from "./form";
import TiketBook from "./tiketbook";
import Complain from "./complain";
import {getOneDetails} from './UserFunctions';
class Main extends Component {
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
      this.state.eventID = "5ed384da9f461e107729116c";
      //this.state.eventID = localStorage.eventtoken.eventID;
      this.state.eventID= this.props.id;

      getOneDetails(this.state.eventID).then(res => {
         if (res) {
         this.setState({ eventDetails : res });
         var x = this.state.eventDetails[0].img.toString()        
         this.setState({img : 'url('+'"http://localhost:3000/upload/'+x+'"'+')'})         
        console.log(this.state.img);
        console.log(this.state.eventDetails[0].img);
        console.log('Data has been received!!');

         }
       })
  }

  render() {
    return (
      <main>
       <div className="customhead">
            <h1>{this.state.eventDetails[0].eventName}</h1>
        </div>
     
        

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i className="far fa-calendar-alt"> Date</i></p>
                <p className="service-title">{this.state.eventDetails[0].date}</p>
                <p>{this.state.eventDetails[0].time} at {this.state.eventDetails[0].date}</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><i className="fas fa-crop"> Time</i></p>
                <p className="service-title">{this.state.eventDetails[0].time}</p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><i className="fas fa-code">Sport</i></p>
                <p className="service-title">{this.state.eventDetails[0].sport}</p>
                
              
          </div>
        </div>

            </div>


        <section className="intro" id="aboutus">
            <h2>About Us</h2>
            <div>
             <p>{this.state.eventDetails[0].discription}</p>
            </div>
        </section>

        <section>
            <h2>Ruls</h2>
            <div>
              <p>{this.state.eventDetails[0].ruls}</p>
              
              </div>
        </section>
        
        <section>
            <h2>Price</h2>
            <div>
              <p>{this.state.eventDetails[0].price}</p>
            </div>
        </section>


        <section id="register">
            <h2>Register</h2>
            <Form id={this.props.id}/>
          
        </section>
        
        <section id="tikets">
            <h2>Book Tikets</h2>
            <TiketBook />         
        </section>
        
        <section>
            <h2>Complains</h2>
           <Complain id={this.props.id}  />
          
        </section>
      </main>
    );
  }
}

export default Main;
