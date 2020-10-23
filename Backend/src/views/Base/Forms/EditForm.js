import React, { Component } from 'react';
import { getOneDetails,updateEvent } from './../../UserFunctions';
import jwt_decode from 'jwt-decode'
import { TimePicker } from 'react-time-picker';
import moment from 'moment';


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

class Forms extends Component {

 constructor(props) {
    super(props);

    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onChangeSport = this.onChangeSport.bind(this);
    this.onChangeOrganizer = this.onChangeOrganizer.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDiscription = this.onChangeDiscription.bind(this);
    this.onChangeRules = this.onChangeRules.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userID : '',
      eventName:'',
      sport:'',
      organizer:'',
      time:'',
      date:'',
      discription:'',
      rules:'',
      price:'',
      img:'',
      type:'single',
      eventID:'',
      eventDetails:[{'img':'2020-05-25T07:40:23.509ZWhatsApp Image 2019-05-21 at 17.52.55.jpeg'}],
    }
    
    var today = Date()
     
  }
    componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      userID: decoded._id,
    })
    this.state.eventID= this.props.match.params.id;
    getOneDetails(this.state.eventID).then(res => {
         if (res) {
         this.setState({ sport : res[0].sport });
          this.setState({
              eventName:res[0].eventName,
	      sport:res[0].sport,
	      organizer:res[0].organizer,
	      time:res[0].time,
	      date:res[0].date,
	      discription:res[0].discription,
	      rules:res[0].rules,
	      price:res[0].price,
	      img:res[0].img,
         
        })

         
        console.log(this.state.eventDetails[0].img);
        console.log('Data has been received!!');
	console.log(this.state.date)
         }
       })
       ;

        
  }


onChangeEventName(e) {
   this.setState({
        eventName: e.target.value
   });
 }
  onChangeSport(e) {
   this.setState({
        sport: e.target.value
   });
 }
  onChangeOrganizer(e) {
   this.setState({
        organizer: e.target.value
   });
 }
  onChangeTime(e) {
   this.setState({
        time: e.target.value
   });
 }
  onChangeDate(e) {
   this.setState({
        data: e.target.value
   });
 }
  onChangeDiscription(e) {
   this.setState({
        discription: e.target.value
   });
 }
  onChangeRules(e) {
   this.setState({
        rules: e.target.value
   });
 }
  onChangePrice(e) {
   this.setState({
        price: e.target.value
   });
 }
  onChangeImg(e) {
   this.setState({
        img: e.target.files[0]
   });
   console.log(this.state.img.name);
 }


 onSubmit(e) {
    e.preventDefault();

      const form = new FormData();

      form.append('userID', this.state.userID)
      form.append('eventName', this.state.eventName)
      form.append('sport', this.state.sport)
      form.append('organizer', this.state.organizer)
      form.append('time', this.state.time)
      form.append('date', this.state.date)
      form.append('discription', this.state.discription)
      form.append('rules', this.state.rules)
      form.append('price', this.state.price)
      form.append('img', this.state.img)
      form.append('type', this.state.type)


    console.log(form);
    console.log(form);

    updateEvent(this.state.eventID,form).then(res => {
	alert("Event Updated")
	window.location.reload()
 //     this.props.history.push(`/profile/forms`)
    })

  }

  render() {

    return (



      <div className="animated fadeIn">

        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Create Single Event</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" onSubmit={this.onSubmit} encType="multipart/form-data" className="form-horizontal">

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="event-name">Event Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"
                      id="event-name"
                      name="even-name"			
		      value={this.state.eventName}
		      onChange={this.onChangeEventName}
                       />
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="sport-name">Sport Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"
                      id="sport-name"
                      name="sport-name"
                      value={this.state.sport}
		      onChange={this.onChangeSport}
                       />
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="organizer">Organizer Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"
                      id="organizer"
                      name="organizer"

                      value={this.state.organizer}
		      onChange={this.onChangeOrganizer}
                       />
                    
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="time">Time</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text"
                      id="time"
                      name="time"

                      value={this.state.time}
		      onChange={this.onChangeTime}
                       />
                    
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date"
                      id="date-input"
                      name="date-input"
		      value={this.state.date}
                      onChange={this.onChangeDate}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="discription">Discription</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea"
                      name="discription"
                      id="discription"
                      rows="4"

                      value={this.state.discription}
		                  onChange={this.onChangeDiscription}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="rules">Rules</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea"
                      name="rules"
                      id="rules"
                      rows="4"
                      value={this.state.rules}

		                  onChange={this.onChangeRules}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="price">Price</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea"
                      name="price"
                      id="price"
                      rows="4"
                      value={this.state.price}

		                  onChange={this.onChangePrice}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="img">Cover Image</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file"
                      id="img"
                      name="img"
			
		      onChange={this.onChangeImg}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row hidden>
                    <Col md="3">
                      <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Label className="custom-file">
                        <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                        <span className="custom-file-control"></span>
                      </Label>
                    </Col>
                  </FormGroup>
                  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                  <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Forms;
