import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import CodyCalander from "./components/CodyCalendar/CodyCalendar";
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
          <Route exact path="/closet" >
            <div className="Closets">
              <Closet cloth_category="top"/>
              <Closet cloth_category="bottom"/>
              <Closet cloth_category="shoes"/>
              <Closet cloth_category="outer"/>
              <Closet cloth_category="accessory"/>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }}

export default App;
