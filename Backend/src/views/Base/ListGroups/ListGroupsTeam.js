import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane, Table } from 'reactstrap';
import jwt_decode from 'jwt-decode'
import { getEventDetails } from './../../UserFunctions'

class ListGroups extends Component {

constructor(props) {
    super(props);

    this.state = {
      userID:'',
      email:'',
      password:'',
      userOrders:[],
    }
  }

 componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.state.userID= decoded._id
     getEventDetails(this.state.userID).then(res => {
        if (res) {
        this.setState({ userOrders : res });
        console.log(this.state.userOrders);
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
                <i className="fa fa-align-justify"></i><strong>List Group</strong>
                <small> custom content</small>
              </CardHeader>
              <CardBody>
		

                <Table responsive striped hover>
                    <tbody>
                    	    <tr>
                              <td><strong>Event</strong></td>
                              <td><strong>Date</strong></td>
                            </tr>
                      {this.state.userOrders.map((key, value) => {
                          return (
                            
                            <tr key={key.value}>
                              <td><Link to={'editformsteams/'+key._id}><strong>{key.eventName}</strong></Link></td>
                              <td probs={key.eventId}><strong>{key.date}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>

              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default ListGroups;
