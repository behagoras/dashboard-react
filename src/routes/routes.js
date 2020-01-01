// core components/views for Admin layout
import PropertiesFront from '../pages/Front/PropertiesFront';
import PropertiesBig from '../pages/Dashboard/PropertiesBig';
import Wizard from '../pages/Dashboard/Wizard/WizardPage';
import SingleFormPage from '../pages/Dashboard/SingleFormPage';
import HelloWorld from '../components/HelloWorld';

const dashboardRoutes = [
  {
    path: '/hello',
    name: 'form',
    rtlName: 'form',
    icon: 'fas fa-home',
    component: HelloWorld,
    layout: '/admin',
    exact: false,
    menu: false,
    sidebar: false,
  },
  {
    path: '/form',
    name: 'form',
    rtlName: 'form',
    icon: 'fas fa-home',
    component: SingleFormPage,
    layout: '/admin',
    exact: false,
    menu: false,
    sidebar: false,
  },
  {
    path: '/add-property',
    name: 'Wizard',
    rtlName: 'Wizard',
    icon: 'fas fa-home',
    component: Wizard,
    layout: '/admin',
    exact: true,
    menu: false,
    sidebar: false,
  },
  {
    path: '/property/:_id',
    name: 'Wizard',
    rtlName: 'Wizard',
    icon: 'fas fa-home',
    component: Wizard,
    layout: '/admin',
    exact: false,
    menu: false,
    sidebar: false,
  },
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
    layout: '',
    exact: false,
    menu: false,
    sidebar: false,
  },

];

export default dashboardRoutes;
