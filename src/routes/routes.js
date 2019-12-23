// core components/views for Admin layout
import HelloWorld from '../components/HelloWorld';
import PropertiesFront from '../pages/Front/PropertiesFront';
import PropertiesBack from '../pages/Dashboard/Properties';

const dashboardRoutes = [
  {
    path: '/properties',
    name: 'Properties Front',
    rtlName: 'Properties Front',
    // icon: Person,
    component: PropertiesFront,
    layout: '/front',
    exact: false,
  },
  {
    path: '/properties',
    name: 'Properties Back',
    rtlName: 'Properties Back',
    // icon: 'content_paste',
    component: PropertiesBack,
    layout: '/admin',
    exact: false,

  },
  {
    path: '/',
    name: 'Hello World',
    rtlName: 'Hello World',
    // icon: Dashboard,
    component: HelloWorld,
    layout: '/admin',
    exact: false,
  },
];

export default dashboardRoutes;
