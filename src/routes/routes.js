// core components/views for Admin layout
import HelloWorld from '../components/HelloWorld';
import PropertiesFront from '../pages/Front/PropertiesFront';
// import PropertiesBack from '../pages/Dashboard/Properties';
import PropertiesBig from '../pages/Dashboard/PropertiesBig';
import MyForm from '../pages/Dashboard/Form';

const dashboardRoutes = [
  {
    path: '/properties',
    name: 'Properties Front',
    rtlName: 'Properties Front',
    icon: 'fas fa-home',
    component: PropertiesFront,
    layout: '/front',
    exact: false,
    menu: true,
  },
  // {
  //   path: '/properties',
  //   name: 'Properties Back',
  //   rtlName: 'Properties Back',
  //   icon: 'fas fa-home',
  //   component: PropertiesBack,
  //   layout: '/admin',
  //   exact: false,
  //   menu: true,
  // },
  {
    path: '/properties-big',
    name: 'Properties Big',
    rtlName: 'Properties Big',
    icon: 'fas fa-home',
    component: PropertiesBig,
    layout: '/admin',
    exact: false,
    menu: true,
  },
  {
    path: '/',
    name: 'Hello World',
    rtlName: 'Hello World',
    icon: 'fas fa-columns',
    component: HelloWorld,
    layout: '/admin',
    exact: false,
    menu: true,
  },

];

export default dashboardRoutes;
