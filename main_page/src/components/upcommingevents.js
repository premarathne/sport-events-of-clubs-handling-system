import React, { Component } from 'react';
import Form from "./form";
import {getEvents} from './UserFunctions'


class Events extends Component {
constructor(props) {
    super(props);

    this.state = {

      eventID:'',
      img:'',
      eventDetails:[{'img':'2020-05-25T07:40:23.509ZWhatsApp Image 2019-05-21 at 17.52.55.jpeg'}]
    };
     console.log(this.state.eventDetails[0].img);
     console.log(this.props);

  }

componentDidMount() {

      getEvents().then(res => {
         if (res) {
         this.setState({ eventDetails : res });
  //       var x = this.state.eventDetails[0].img.toString()        
 //        this.setState({	img : 'url('+'"http://localhost:3000/upload/'+x+'"'+')'}) 
  //       console.log(this.state.eventDetails[0].img);
         console.log('Data has been received!!');
         }
       })
  }
  
  render() {
    return (



        <div>
             <div className="services">
             { this.state.eventDetails.map((event,index) => {
                return(
                <a href={"http://localhost:3002/event/"+event._id}>
                <div style={{  
			  backgroundImage:'url('+'"http://localhost:3000/upload/'+event.img+'"'+')',
			  backgroundPosition: 'center',
			  backgroundSize: 'cover',
			  backgroundRepeat: 'no-repeat'
		}}>
                
		<p className="service-title">{event.eventName}</p>
                </div>
                </a>
              )})}  
                
             </div>

         </div>


    );
  }
}

export default Events;
