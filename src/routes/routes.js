// core components/views for Admin layout
import PropertiesFront from '../pages/Front/PropertiesFront';
import PropertiesBig from '../pages/Dashboard/PropertiesBig';

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
    sidebar: true,
  },
  {
    path: '/properties-big',
    name: 'Properties Big',
    rtlName: 'Properties Big',
    icon: 'fas fa-home',
    component: PropertiesBig,
    layout: '/admin',
    exact: false,
    menu: true,
    sidebar: true,
  },
  {
    path: '/',
    name: 'Hello World',
    rtlName: 'Hello World',
    icon: 'fas fa-columns',
    component: PropertiesBig,
    layout: '/admin',
    exact: false,
    menu: false,
    sidebar: false,
  },

];

export default dashboardRoutes;
