import NotFound from "./component/NotFound";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";

const route = [
  { path: "/", component: HomePage, exact: true },
  { path: "/about-us", component: AboutUs },
  { path: "/profile", component: Profile },
  { path: "*", component: NotFound },
];
export default route;
