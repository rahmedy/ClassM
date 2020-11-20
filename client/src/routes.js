
import Dashboard from "views/Dashboard.js";
//import routings from "./components/Routings/routings";

//var routes = routings;


var routes = [
  {
    path: "/dashboard/:id",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: "fa fa-home",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/dashboard/:id/class",
    name: "Class One",
    rtlName: "إخطارات",
    icon: "fas fa-graduation-cap",
    component: Dashboard,
    layout: "/admin"
  }
];

export default routes;
