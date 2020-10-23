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




export default class Home extends Component {

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
      this.state.eventID= this.props.match.params.id;
      //this.state.eventID = localStorage.eventtoken.eventID;
      if(this.state.eventID != 'undefined'){
	      localStorage.setItem('eventtoken', this.state.eventID);
	      console.log(localStorage.eventtoken.eventID +"Yaaindu");
      }
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
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                Example Form
              </CardHeader>
              <CardBody>
		<div className="EL">
		        <Image  src={'/upload/'+this.state.eventDetails[0].img} className="header-image" />
		</div>
	     </CardBody>
            </Card>
          </Col>

        </Row>




    </div>


    );


  }
}
