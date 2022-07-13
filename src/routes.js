import Blog from "./component/Blog";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import PostPage from "./pages/PostPage";

const route = [
  { path: "/blogs/:id", component: Blog },
  { path: "/Post/:id?", component: PostPage },
  // { path: "/Post/:id?([0-9]+)", component: PostPage },
  { path: "/about-us", component: AboutUs },
  { path: "/profile", component: Profile },
  { path: "/blogs", component: Blogs },
  { path: "/", component: HomePage, exact: true },
  { path: "*", component: NotFound },
];
export default route;
