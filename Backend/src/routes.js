import React from 'react';


const Forms = React.lazy(() => import('./views/Base/Forms'));
const EditForms = React.lazy(() => import('./views/Base/Forms/EditForm'));
const FormsTeam = React.lazy(() => import('./views/Base/Forms/FormsTeam'));
const EditFormsTeams = React.lazy(() => import('./views/Base/Forms/EditFormTeam'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const ListGroupsTeam = React.lazy(() => import('./views/Base/ListGroups/ListGroupsTeam'));
const RegisteredList = React.lazy(() => import('./views/Base/ListGroups/RegisteredList'));
const RegisteredListTeam = React.lazy(() => import('./views/Base/ListGroups/RegisteredListTeam'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const TablesTeam = React.lazy(() => import('./views/Base/Tables/TablesTeam'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

  { path: '/profile/forms', name: 'Forms', component: Forms },
  { path: '/profile/editforms/:id', name: 'EditForm', component: EditForms },
  { path: '/profile/formsTeam', name: 'Forms', component: FormsTeam },
  { path: '/profile/editformsteams/:id', name: 'EditFormTeam', component: EditFormsTeams },
  { path: '/profile/tables/:id', name: 'Tables', component: Tables },
  { path: '/profile/tablesteam/:id', name: 'TablesTeam', component: TablesTeam },
  { path: '/profile/list', name: 'List Groups', component: ListGroups },
  { path: '/profile/listTeam', name: 'List Groups', component: ListGroupsTeam },
  { path: '/profile/registeredlist', name: 'Register List', component: RegisteredList },
  { path: '/profile/registeredlistTeam', name: 'Register List', component: RegisteredListTeam },
  { path: '/profile/users', exact: true,  name: 'Users', component: Users },
  { path: '/profile/user', exact: true, name: 'User Details', component: User },
];

export default routes;
