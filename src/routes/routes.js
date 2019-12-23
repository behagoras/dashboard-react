// core components/views for Admin layout
import HelloWorld from '../components/HelloWorld';
import PropertiesFront from '../pages/Front/PropertiesFront';
import PropertiesBack from '../pages/Dashboard/Properties';
import PropertiesBig from '../pages/Dashboard/PropertiesBig';

const dashboardRoutes = [
  {
    path: '/properties',
    name: 'Properties Front',
    rtlName: 'Properties Front',
    // icon: Person,
    component: PropertiesFront,
    layout: '/front',
    exact: false,
    menu: true,
  },
  {
    path: '/properties',
    name: 'Properties Back',
    rtlName: 'Properties Back',
    // icon: 'content_paste',
    component: PropertiesBack,
    layout: '/admin',
    exact: false,
    menu: true,
  },
  {
    path: '/properties-big',
    name: 'Properties Big',
    rtlName: 'Properties Big',
    // icon: 'content_paste',
    component: PropertiesBig,
    layout: '/admin',
    exact: false,
    menu: true,
  },
  {
    path: '/',
    name: 'Hello World',
    rtlName: 'Hello World',
    // icon: Dashboard,
    component: HelloWorld,
    layout: '/admin',
    exact: false,
    menu: true,
  },
];

export default dashboardRoutes;
