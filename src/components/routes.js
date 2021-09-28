import Main from './Main';
import MainAssociation from './MainAssociation';


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
  }
]

export default routes;
