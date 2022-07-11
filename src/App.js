import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={HomePage}></Route>
      <Route path="/about-us" component={AboutUs}></Route>
    </BrowserRouter>
  );
}

export default App;
