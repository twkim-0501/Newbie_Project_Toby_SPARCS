import React, {Component} from "react"
import MainTemplate from './MainTemplate';
import './MainPage.css';
import axios from "axios";

var Days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var fulldays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var today= new Date();
var date= (today.getFullYear())+'-' +(today.getMonth()+1) + '-' + (today.getDate())
var day = Days[today.getDay()];
class MainPage extends Component {
    state={
        codyList:{
            "Sun": [],
            "Mon": [],
            "Tue": [],
            "Wed": [],
            "Thu": [],
            "Fri": [],
            "Sat": [],
        }
    }
    componentDidMount() {
        axios.get(`/api/calendar/`)
        .then(response => { this.setState({codyList: response.data})});
    }/*
    getDayCody = () => {
        axios.get(`/api/calendar/${day}`)
        .then(response)
    }*/
    render(){
        const {codyList}= this.state;
        const NoCody = 1;

        if(codyList[day].length){
            return (
                <div>
                    <h1 className="head">
                        Today's Outfit
                    </h1>
                    <body className="Main">
                        <MainTemplate day={fulldays[today.getDay()]} date={date}>
                            {codyList[day][0]}
                        </MainTemplate>
                    </body>
                </div>
            );
        }
        else{
            return (
                <div>
                    <h1 className="head">
                        Today's Outfit
                    </h1>
                    <body className="Main">
                        <MainTemplate day={fulldays[today.getDay()]} date={date}>
                            {NoCody}
                        </MainTemplate>
                    </body>
                </div>
            )
        }
    }
    
}
export default MainPage;