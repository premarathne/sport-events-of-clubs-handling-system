import React, { Component } from 'react';
import {playerRegister} from './UserFunctions'

class TiketBook extends Component {
  constructor(){
      super();
      this.state = {
          name : "",
          email : "",
          message : "",
          formError: false
      }
  }

  getName = (e) =>{
    let username = e.target.value; 
    this.setState({
        name: username
    });
    console.log(this.state.name);
  }
  
  
  getEmail = (e) =>{
    let userEmail = e.target.value; 
    //the most important thing is that we use a RegEx
    //in order to manage the input of the email
    //at least we can get a some what valid email
    if(userEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
      this.setState({
        email: userEmail
    });
      }else{
        this.setState({
          email: ""
      });
      console.log("Incorrect Email, must match Expression");
    }
  
    console.log(this.state.email);
  }

  
  getDescription = (e) =>{
    let userMessage = e.target.value; 
    this.setState({
        message: userMessage
    });
    console.log(this.state.message);
  }
  //send the form
  submitForm = (e) =>{
    e.preventDefault();

    if(this.state.name === "" || this.state.email === "" || this.state.message === "" ){
     this.setState({
        formError: true
     })
       return false;
    }else{
        this.setState({
            formError: false
         })
        console.log(`UserData: {
            eventID: ${this.props.id},
            Username: ${this.state.name},
            Email: ${this.state.email},
            Message: ${this.state.message}
        }`)
    
       const form = new FormData();

       form.append('eventID', this.props.id)
       form.append('playerName', this.state.name)
       form.append('email', this.state.email)
       form.append('contactNumber', this.state.message)
       
       console.log(form);





       
        console.log("form sent")
    
    }
 
  }

  render() {

  

    return (
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          {/* I am just sending a basic error message */}
              {this.state.formError &&
                <p className="error">
                    Fill all the input fields please.
                </p>
              }
              <p>Buy Tikets</p>
              <div>
                <label htmlFor="name">Number of Tikets</label>
                <input type="text" name="name" placeholder="Number Of Tikets" onChange={this.getName}  />
              </div>

              <div>
                <p>This function currently not avelable</p>
                <input type="hidden" name="cmd" value="_s-xclick" />
		<input type="hidden" name="hosted_button_id" value="2EK5ZA4NVAQ2G" />
		<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
		<img alt="" border="0" src="https://www.paypal.com/en_PH/i/scr/pixel.gif" width="1" height="1" />

              </div>
              
            </form>
    );
  }
}

export default TiketBook;
