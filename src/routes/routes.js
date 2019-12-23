// core components/views for Admin layout
import HelloWorld from '../components/HelloWorld';
import PropertiesFront from '../pages/Front/PropertiesFront';
import PropertiesBack from '../pages/Dashboard/Properties';
import PropertiesTabler from '../pages/Dashboard/PropertiesTabler';
// import PropertiesMaterial from '../pages/Dashboard/PropertiesMaterial';
// import * as PlaceHolder from '../pages/Dashboard/PlaceHolder';

// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

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
  // {
  //   path: '/properties-material',
  //   name: 'Properties Back Material',
  //   rtlName: 'Properties Back Material',
  //   // icon: LibraryBooks,
  //   component: PropertiesMaterial,
  //   layout: '/admin',
  //   exact: false,
  // },
  {
    path: '/properties-tabler',
    name: 'Properties Back Tabler',
    rtlName: 'Properties Back Tabler',
    // icon: LibraryBooks,
    component: PropertiesTabler,
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
