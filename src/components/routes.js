import Main from './Main';
import MainAssociation from './MainAssociation';
import MainEvents from './MainEvents';
import MainMembers from './MainMembers';
import Davos from './Davos';
import Technologies from './Technologies';
import Contacts from './Contacts';
import NoMatch from './NoMatch';

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
  },
  {
    path: '/davos',
    exact: true,
    component: Davos
  },
  {
    path: '/technologie',
    component: Technologies
  },
  {
    path: '/contacts',
    exact: true,
    component: Contacts
  },
  {
    component: NoMatch
  }
]

export default routes;
