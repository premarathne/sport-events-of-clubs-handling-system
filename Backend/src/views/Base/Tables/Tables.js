import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Input, TableInput,InputGroup,InputGroupAddon, Button } from 'reactstrap';
import { getPlayerDetails,sendEmails } from './../../UserFunctions'

class Tables extends Component {
constructor(props) {
    super(props);

    this.onChangeMassage = this.onChangeMassage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {

      eventID:'',
      msg:'',
      playerDetails:[]
    };

     console.log(this.props.match.params.id);
  }

componentDidMount() {
      this.state.eventID= this.props.match.params.id;
      getPlayerDetails(this.state.eventID).then(res => {
         if (res) {
         this.setState({ playerDetails : res });
         console.log(this.state.eventDetails);
         console.log('Data has been received!!');
         }
       })
  }
  
  onChangeMassage(e) {
   this.setState({
        msg: e.target.value
   });
 }

onSubmit(e) {
    e.preventDefault();

      const form = {

      msg: this.state.msg,
    }
      


    console.log(form);
    console.log(form);

    sendEmails(this.state.eventID,form).then(res => {
      alert(res);
      window.location.reload();
    })
  }
  render() {
    return (
      <div className="animated fadeIn">
        

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Combined All Table
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    
                  </tr>
                  </thead>
                  <tbody>
                  
                  
                  { this.state.playerDetails.map((player,index) => {
		        return(
		          <tr key={player.index}>
		            <td>{player.player.playerName}</td>
		            <td>{player.updatedAt}</td>
		            <td>{player.player.email}</td>
		            
		         </tr> 
                  )})}
                  </tbody>
                </Table>
                <Col md="12">
                <h4>Send Email to all Register Players</h4>
                      <InputGroup>
                      
                        <Input type="text" id="input2-group2" name="input2-group2" placeholder="Massage" onChange={this.onChangeMassage}/>
                        <InputGroupAddon addonType="append">
                          <Button type="button" color="primary" onClick={this.onSubmit} >Send Email</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;
