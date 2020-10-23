import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getComplain } from './UserFunctions'

class Complain extends Component {
constructor(props) {
    super(props);

    this.state = {
      eventID:'',
      complainList:[],
    }
  }

 componentDidMount() {
     this.state.eventID= this.props.match.params.id;
     getComplain(this.state.eventID).then(res => {
        if (res) {
        this.setState({ complainList : res });
        console.log(this.state.complainList);
        console.log('Data has been received!!');
        }
      })
  }
  
  submitForm = (e) =>{
    
 
  }

  render() {
    return (
      <div>
        


                <Table striped>
                  <thead>
                  <tr>
                    <th>complains</th>
                  </tr>
                  </thead>
                  <tbody>
                  
                  
                  { this.state.complainList.map((complain,index) => {
		        return(
		          <tr key={complain.index}>
		            <td>{complain.msg}</td>
		         </tr> 
                  )})}
                  </tbody>
                </Table>
                

      </div>

    );
  }
}

export default Complain;
