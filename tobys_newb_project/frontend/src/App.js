import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import CodyCalander from "./components/CodyCalander";
import Closet from "./components/Closet/Closet.js";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <NavBar /> 
        <Switch>
          <Route exact path="/">
            <MainPage />
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
  }}

export default App;
