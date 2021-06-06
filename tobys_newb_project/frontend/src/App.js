import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./components/Mainpage/MainPage";
import CodyCalander from "./components/CodyCalendar/CodyCalendar";
import Closet from "./components/Closet/Closet.js";
import BulbIcon from '@material-ui/icons/WbIncandescent';

class App extends Component {
  state = {
    is_highlight:0
  }
  
  shouldComponentUpdate(nextState){
    return (this.state.is_highlight !== nextState.is_highlight);
  }
  handleHighlight = () => {
    let temp;
    temp = this.state.is_highlight ? 0 : 1 ;
    this.setState({is_highlight: temp});
  }
  render(){
    console.log(this.state.is_highlight);
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
            <div className="Bulb" onClick={this.handleHighlight}>
              <BulbIcon fontSize='large'></BulbIcon>
            </div>
            <div className="Closets">
              <Closet cloth_category="top" is_highlight={this.state.is_highlight} />
              <Closet cloth_category="bottom" is_highlight={this.state.is_highlight}/>
              <Closet cloth_category="shoes" is_highlight={this.state.is_highlight}/>
              <Closet cloth_category="outer" is_highlight={this.state.is_highlight}/>
              <Closet cloth_category="accessory" is_highlight={this.state.is_highlight}/>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }}

export default App;
