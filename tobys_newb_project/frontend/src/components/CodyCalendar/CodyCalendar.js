import React, {Component} from "react";
import CodySelect from "./CodySelect";
import WeeklyCal from "./WeeklyCalendar";
import axios from "axios";

class CodyCalander extends Component {
    state = {
        closet: {},
        codyList: {
            "Sun": [
                {
                    id: 100,
                    top: "a",
                    bottom: "b",
                    shoes: "c",
                    outer: "d",
                    accessory: "e",
                }
            ],
            "Mon": [],
            "Tue": [],
            "Wed": [],
            "Thu": [],
            "Fri": [],
            "Sat": [],
        }
    }
    componentDidMount() {
        axios.get(`/api/closet/`)
        .then(response => { this.setState({closet: response.data}) });
    }
    handleDelete = (id) => {

    }
    render(){
        //console.log(this.state.closet);
        return (
            
            <div>
                <CodySelect >{this.state.closet}</CodySelect>
                <WeeklyCal onDelete={this.handleDelete}>{this.state.codyList}</WeeklyCal>
            </div>
            
        );
    } 
}
export default CodyCalander;