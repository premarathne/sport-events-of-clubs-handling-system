import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getUsers,deleteUser } from './UserFunctions'

class Tables extends Component {
constructor(props) {
    super(props);

    this.state = {
      usersDetails:[]
    };

  }

componentDidMount() {
      getUsers().then(res => {
         if (res) {
           this.setState({ usersDetails : res });
           console.log('Data has been received!!');
         }
       })
  }
  
  submitForm = (e) =>{
    e.preventDefault();
    
    var txt;
    var r = window.confirm("Press a button!");
    if (r == true) {
       txt = "You pressed OK!";
       deleteUser(e.target.name).then(res => {
         if (res) {
           console.log(res);
           console.log('Data has been received!!');
         }
       })
       window.location.reload()
    } 

    console.log(txt)
    console.log(e.target.name)

 
  }

  render() {
    return (
      <div>
        


                <Table striped>
                  <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Details</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  
                  
                  { this.state.usersDetails.map((user,index) => {
		        return(
		          <tr key={user.index}>
		            <td>{user.username}</td>
		            <td>{user.email}</td>
		            <td><Link to={'event/'+user._id}>Infor</Link></td>
		            <td>
		              <input className="custominput" type="submit" name={user._id} value="Remove User" onClick={this.submitForm} />
		           </td>
		         </tr> 
                  )})}
                  </tbody>
                </Table>
                

      </div>

    );
  }
}

export default Tables;
