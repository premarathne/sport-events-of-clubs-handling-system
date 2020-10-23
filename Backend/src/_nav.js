 import jwt_decode from 'jwt-decode'

var username = ''

function componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    username=decoded.username
  }

componentDidMount()

 export default {
  items: [
    {
      name: username,
      url: '/profile',
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
      name: 'User',
      url: '/profile/user',
      icon: 'icon-drop',
    },

    {
      title: true,
      name: 'Single',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
       },
       class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
      	name: 'Single Event',
      	url: '/profile/forms',
      	icon: 'icon-pencil',
      },

        {
          name: 'Edit Single',
          url: '/profile/list',
          icon: 'icon-puzzle',
        },

        {
      	name: 'Single Registered',
      	url: '/profile/registeredlist',
      	icon: 'icon-pencil',
      },

/*      {
      title: true,
      name: 'Teams',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
       },
       class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
      	name: 'Teams Event',
      	url: '/profile/formsTeam',
      	icon: 'icon-pencil',
      },

        {
          name: 'Edit Teams',
          url: '/profile/listTeam',
          icon: 'icon-puzzle',
        },

        {
      	name: 'Teams Registered',
      	url: '/profile/registeredlistTeam',
      	icon: 'icon-pencil',
      },*/

  ],
};
