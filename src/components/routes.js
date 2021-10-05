import Main from './Main';
import MainAssociation from './MainAssociation';
import MainEvents from './MainEvents';
import MainMembers from './MainMembers';



const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/association',
    exact: true,
    component: MainAssociation
  },
  {
    path: '/events',
    exact: true,
    component: MainEvents
  },
  {
    path: '/members',
    exact: true,
    component: MainMembers
  }
]

export default routes;
