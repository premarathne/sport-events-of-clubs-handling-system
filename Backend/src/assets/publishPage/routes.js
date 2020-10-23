import React from 'react';

const Home = React.lazy(() => import('./components/Home'));
const Infor = React.lazy(() => import('./components/Infor'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

  { path: '/event/home', exact: true, name: 'User Details', component: Home },
  { path: '/event/infor', exact: true, name: 'User Details', component: Infor },
];

export default routes;
