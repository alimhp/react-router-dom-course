import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";

import Profile from "./pages/Profile";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/profile" component={Profile} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
