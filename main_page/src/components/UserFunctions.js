import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:5000/users/register', {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('http://localhost:5000/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('http://localhost:5000/users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const addEvnet = newEvent => {
  return axios
    .post('http://localhost:5000/newevent/add', newEvent)
    .then(response => {
      console.log('Registered')
    }).catch(err =>{
      console.log(newEvent.img)
    })
}

export const getOneDetails = eventID => {
   return axios
     .get('http://localhost:5000/newevent/oneevent/'+eventID )
     .then(response => {
       console.log(response)
       return response.data
     })
     .catch(err => {
       console.log(err)
     })
}

export const getEventDetails = eventID => {
  return axios
    .get('http://localhost:5000/newevent/event/'+eventID )
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getEvents = () => {
  return axios
    .post('http://localhost:5000/newevent/event' )
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const playerRegister = player => {
  return axios
    .post('http://localhost:5000/newevent/playerreg', player)
    .then(response => {
      return response.data
    }).catch(err =>{
      console.log(err)
    })
}

export const getPlayerDetails = eventID => {
   return axios
     .get('http://localhost:5000/newevent/singleplayers/'+eventID )
     .then(response => {

       console.log(response)
       return response.data
     })
     .catch(err => {
       console.log(err)
       console.log(eventID + "chamly");
     })
}

export const contactUs = data => {
   return axios
     .post('http://localhost:5000/newevent/contactus',data )
     .then(response => {

       console.log(response)
       return response.data
     })
     .catch(err => {
       console.log(err)
       console.log(data + "chamly");
     })
}
