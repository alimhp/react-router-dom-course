import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage}></Route>
    </BrowserRouter>
  );
}

export default App;
