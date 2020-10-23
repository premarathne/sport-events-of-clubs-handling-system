import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { getPlayerDetails } from './../../UserFunctions'

class Tables extends Component {
constructor(props) {
    super(props);

    this.state = {

      eventID:'',
      playerName:'',
      email:'',
      contactNumber:'',
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
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  
                  
                  { this.state.playerDetails.map((player,index) => {
		        return(
		          <tr key={player.index}>
		            <td>{player.player.playerName}</td>
		            <td>2012/01/01</td>
		            <td>{player.index}</td>
		            <td>
		              <Badge color="success">Active</Badge>
		           </td>
		         </tr> 
                  )})}
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;
