import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getContactUs } from './UserFunctions'

class ContactUs extends Component {
constructor(props) {
    super(props);

    this.state = {
      contactUsList:[],
    }
  }

 componentDidMount() {

     getContactUs().then(res => {
        if (res) {
        this.setState({ contactUsList : res });
        console.log(this.state.contactUsList);
        console.log('Data has been received!!');
        }
      })
  }
  
  

  render() {
    return (
      <div>
        


                <Table striped>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Massage</th>
                  </tr>
                  </thead>
                  <tbody>
                  
                  
                  { this.state.contactUsList.map((contacts,index) => {
		        return(
		          <tr key={contacts.index}>
		            <td>{contacts.name}</td>
		            <td>{contacts.email}</td>
		            <td>{contacts.msg}</td>
		         </tr> 
                  )})}
                  </tbody>
                </Table>
                

      </div>

    );
  }
}

export default ContactUs;
