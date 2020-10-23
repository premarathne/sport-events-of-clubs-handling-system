import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container , Image, Figure } from 'react-bootstrap';
import classnames from 'classnames';
import {getOneDetails , playerRegister} from '../../views/UserFunctions'

import './Home.css';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';




export default class Infor extends Component {

  constructor(props) {
    super(props);



    this.state = {

      eventID:'',
      playerName:'',
      email:'',
      contactNumber:'',
      eventDetails:[{'img':'2020-05-25T07:40:23.509ZWhatsApp Image 2019-05-21 at 17.52.55.jpeg'}]
    };
     // console.log(this.state.eventDetails[0].img);
     // console.log(this.props);
     // console.log(this.props.match.params.id);
  }

componentDidMount() {
      //this.state.eventID= this.props.match.params.id;
      //this.state.eventID = localStorage.eventtoken.eventID;
      //localStorage.setItem('eventtoken', this.state.eventID)
      console.log(localStorage.eventtoken +"Yaaindu");
      getOneDetails(localStorage.eventtoken).then(res => {
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


	<Row>
	<Col xs="12" md="8">
  	  <Card>
              <CardHeader>
                <strong>Icon/Text</strong> Groups
              </CardHeader>
              <CardBody>
                <div>

		<h1>{this.state.eventDetails[0].userID}</h1>
		<h1>{this.state.eventDetails[0].eventName}</h1>
		<h1>{this.state.eventDetails[0].sport}</h1>
		<h1>{this.state.eventDetails[0].time}</h1>
		<h1>{this.state.eventDetails[0].date}</h1>
		<h1>{this.state.eventDetails[0].price}</h1>
		<h1>{this.state.eventDetails[0].rules}</h1>
		<h1>{this.state.eventDetails[0].discription}</h1>
		<h1>{this.state.eventDetails[0].organizer}</h1>

		</div>
              </CardBody>

            </Card>
          </Col>

        </Row>


    </div>


    );


  }
}
