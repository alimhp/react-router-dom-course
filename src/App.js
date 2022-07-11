import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import route from "./routes";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {route.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
