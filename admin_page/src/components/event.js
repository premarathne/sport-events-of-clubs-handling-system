import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getEventDetails,deleteEvent } from './UserFunctions'

class Events extends Component {
constructor(props) {
    super(props);

    this.state = {
      eventsList:[],
    }
  }

 componentDidMount() {
     this.state.eventID= this.props.match.params.id;
     getEventDetails(this.state.eventID).then(res => {
        if (res) {
        this.setState({ eventsList : res });
        console.log(this.state.eventsList);
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
       deleteEvent(e.target.name).then(res => {
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
                    <th>Event</th>
                    <th>Link</th>
                    <th>complains</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  
                  
                  { this.state.eventsList.map((event,index) => {
		        return(
		          <tr key={event.index}>
		            <td>{event.eventName}</td>
		            <td><Link to={{ pathname: "http://localhost:3002/event/"+event._id }} target="_blank" >See</Link></td>
		            <td><Link to={"../complain/"+event._id} >Complains</Link></td>
		            <td>
		              <input className="custominput" type="submit" name={event._id} value="Remove User" onClick={this.submitForm} />
		           </td>
		         </tr> 
                  )})}
                  </tbody>
                </Table>
                

      </div>

    );
  }
}

export default Events;
