import Main from './Main';
import MainAssociation from './MainAssociation';
import MainEvents from './MainEvents';


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
  }
]

export default routes;
