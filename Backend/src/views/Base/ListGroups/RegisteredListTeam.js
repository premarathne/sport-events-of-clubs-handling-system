import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';
import jwt_decode from 'jwt-decode'
import { getEventDetails } from './../../UserFunctions'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
    </tr>
  )
}

class RegisteredList extends Component {

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
                <ListGroup>
                { this.state.userOrders.map((order,index) => {
                return(
                  <ListGroupItem  action key={order.index}>
                
                    <ListGroupItemHeading><Link to={'tablesteam/'+order._id}><strong>{order.eventName}</strong> </Link></ListGroupItemHeading>
                    <ListGroupItemText>{order.discription}</ListGroupItemText>
                    <ListGroupItemText>{order._id}</ListGroupItemText>

                  </ListGroupItem>
                  )})}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default RegisteredList;
