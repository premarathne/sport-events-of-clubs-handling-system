import React, { Component } from 'react';
import Form from "./form";
import {getEventDetails} from './UserFunctions'


class ContactUs extends Component {

  
  render() {
    return (
       
     



        <section>
             <div>
          <div>
          	<div>
          		<div>
          			<span></span>
          		</div>
          		<h3>Address</h3>
	            <p>No 15, Base Line Road,Colombo 05,Sri Lanka</p>
	          </div>
          </div>
          <div>
          	<div>
          		<div>
          			<span></span>
          		</div>
          		<h3>Contact Number</h3>
	            <p><a>0112356981</a></p>
	          </div>
          </div>
          <div>
          	<div>
          		<div>
          			<span></span>
          		</div>
          		<h3>Email Address</h3>
	            <p><a href="mailto:info@yoursite.com" target="_blank">info@yoursite.com</a></p>
	          </div>
          </div>
          <div>
          	<div>
          		<div>
          			<span></span>
          		</div>
          		<h3>Website</h3>
	            <p><a href="#0.2_">yoursite.com</a></p>
	          </div>
          </div>
        </div>
            <Form />
           
          
        </section>


    );
  }
}

export default ContactUs;
