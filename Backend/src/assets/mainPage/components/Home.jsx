import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container , Image, Button, Figure } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
import './Home.css';
import {getEventDetails} from '../../views/UserFunctions'



export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: new Array(4).fill('1'),
      eventID:'',
      email:'',
      password:'',
      eventDetails:[{'img':'2020-05-25T07:40:23.509ZWhatsApp Image 2019-05-21 at 17.52.55.jpeg'}]
    };
     console.log(this.state.eventDetails[0].img);
     console.log(this.props);
     console.log(this.props.match.params.id);
  }

componentDidMount() {
      this.state.eventID='5ec816d6dcec7d3c7a58b10c';
      getEventDetails(this.state.eventID).then(res => {
         if (res) {
         this.setState({ eventDetails : res });
         console.log(this.state.eventDetails[0].img);
         console.log('Data has been received!!');
         }
       })
  }



  render() {
  


    return (
      <div>

        
        <div >
                <Image  src={require('./x.jpg')}  className="header-image" />
	  <div className="hero-text">

	  </div>
	</div>

        <Container>
        <Jumbotron>
          <h2 className="home_Headers">Welcome to CodeLife</h2>
          <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
            { this.state.eventDetails.map((order,index) => {
                return(
                  <Col xs={12} sm={4} className="person-wrapper">
		    <Image src={'/upload/'+order.img} circle className="profile-pic"/>
		    <h3><strong>{order.eventName}</strong></h3>
		    <p><strong>{order.discription} {order.date} at {order.time} orgnizing by {order.orgnizer} </strong></p>
		  </Col>
               )})}          
        </Row>
                
      </Container>

    </div>
      
       
    );

        
  }
}
