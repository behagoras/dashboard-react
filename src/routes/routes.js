// core components/views for Admin layout
import PropertiesFront from '../pages/Front/PropertiesFront';
import Properties from '../pages/Dashboard/Properties';
import AddProperty from '../pages/Dashboard/Wizard/AddProperty';
import UpdateProperty from '../pages/Dashboard/Wizard/UpdateProperty';
import PropertyDetails from '../pages/Dashboard/PropertyDetails';

const dashboardRoutes = [

  {
    path: '/add-property',
    name: 'Wizard',
    rtlName: 'Wizard',
    icon: 'fas fa-home',
    component: AddProperty,
    layout: '/admin',
    props: {
      type: 'create',
    },
    exact: true,
    menu: false,
    sidebar: false,
  },
  {
    path: '/property/edit/:_id',
    name: 'Wizard',
    rtlName: 'Wizard',
    icon: 'fas fa-home',
    component: UpdateProperty,
    layout: '/admin',
    props: {
      type: 'update',
    },
    exact: true,
    menu: false,
    sidebar: false,
  },
  {
    path: '/property/:_id',
    name: 'Wizard',
    rtlName: 'Wizard',
    icon: 'fas fa-home',
    component: PropertyDetails,
    layout: '/admin',
    exact: true,
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
    path: '/properties',
    name: 'Properties',
    rtlName: 'Properties',
    icon: 'fas fa-columns',
    component: Properties,
    layout: '/admin',
    exact: false,
    menu: true,
    sidebar: true,
  },
  {
    path: '/',
    name: 'Properties',
    rtlName: 'Properties',
    icon: 'fas fa-columns',
    component: Properties,
    layout: '',
    exact: false,
    menu: false,
    sidebar: false,
  },

];

export default dashboardRoutes;
