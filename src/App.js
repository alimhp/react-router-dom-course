import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import route from "./routes";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {route.map((route) => (
          <Route {...route} />
        ))}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
