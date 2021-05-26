import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import CodyCalander from "./components/CodyCalander";
import Closet from "./components/Closet.js";


function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
      <Switch>
        <Route exact path="/">
          <h1>Main</h1>
        </Route>
        <Route exact path="/cody_calander">
          <CodyCalander />
        </Route>
        <Route exact path="/closet">
          <Closet />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
