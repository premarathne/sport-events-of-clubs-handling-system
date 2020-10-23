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




export default class EventRegister extends Component {

  constructor(props) {
    super(props);

    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      playerName:'',
      email:'',
      contactNumber:'',
    };

  }



 onChangePlayerName(e) {
   this.setState({
        playerName: e.target.value
   });
 }
  onChangeEmail(e) {
   this.setState({
        email: e.target.value
   });
 }
  onChangeContactNumber(e) {
   this.setState({
        contactNumber: e.target.value
   });
 }
 onSubmit(e) {
     e.preventDefault();

       const form = new FormData();

       form.append('eventID', localStorage.eventtoken)
       form.append('playerName', this.state.playerName)
       form.append('email', this.state.email)
       form.append('contactNumber', this.state.contactNumber)



     console.log(form);
     console.log(this.state.playerName)


     playerRegister(form).then(res => {
       alert(res);
     })

     this.setState({
       playerName:'',
       email:'',
       contactNumber:'',
     })
   }
   
 

  render() {

const chamly = "chamly";
const single = (
   

	<Row>
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                Single
              </CardHeader>
              <CardBody>
                <Form action="" method="post" onSubmit={this.onSubmit} encType="multipart/form-data" className="form-horizontal">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Username</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="username3" name="player_name" autoComplete="Player Name" onChange={this.onChangePlayerName}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Email</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" id="email3" name="email" autoComplete="Email" onChange={this.onChangeEmail}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Contact number</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="password3" name="contact_number" autoComplete="Contact Number" onChange={this.onChangeContactNumber}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="form-actions">
                    <Button type="submit" size="sm" color="primary">Submit</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>

        </Row>

    )
 
 
 
 const team = (
     
	<Row>
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                Team
              </CardHeader>
              <CardBody>
                <Form action="" method="post" onSubmit={this.onSubmit} encType="multipart/form-data" className="form-horizontal">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Username</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="username3" name="player_name" autoComplete="Player Name" onChange={this.onChangePlayerName}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Email</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" id="email3" name="email" autoComplete="Email" onChange={this.onChangeEmail}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Contact number</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="password3" name="contact_number" autoComplete="Contact Number" onChange={this.onChangeContactNumber}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="form-actions">
                    <Button type="submit" size="sm" color="primary">Submit</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>

        </Row>


    )
 

   return (
   <div>
          {chamly=="chamy" ? single : team}
   </div>
   )
  } 

}
