 import jwt_decode from 'jwt-decode'

var eventID = ''

function componentDidMount() {
    const token = "undefined";
    //const decoded = jwt_decode(token)
    eventID=token
    console.log("Ishara" +token );

  }

componentDidMount()

 export default {
  items: [
    {
      name:"Event name here",
      url: '/event/home/'+eventID,
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'User',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Event Post',
      url: '/event/home/'+eventID,
      icon: 'icon-drop',
    },
      {
      	name: 'Event Infor',
      	url: '/event/infor',
      	icon: 'icon-pencil',
      },

        {
          name: 'Event Register',
          url: '/event/eventRegister',
          icon: 'icon-puzzle',
        },

        {
      	name: 'something',
      	url: '/profile/registeredlist',
      	icon: 'icon-pencil',
      },

  ],
};
