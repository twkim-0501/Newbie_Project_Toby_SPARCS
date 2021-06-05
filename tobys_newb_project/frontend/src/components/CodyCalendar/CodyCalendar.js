import React, {Component} from "react";
import CodySelect from "./CodySelect";
import WeeklyCal from "./WeeklyCalendar";
import axios from "axios";

class CodyCalander extends Component {
    state = {
        closet: {},
        codyList: {
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

        axios.get(`/api/closet/`)
        .then(response => { this.setState({closet: response.data}) });
        
        axios.get(`/api/calendar/`)
        .then(response => { this.setState({codyList: response.data})});
    }
    handleUpdate = (list) => {
        this.setState({codyList: list});
    }
    handleDelete = (id, day) => {
        axios.post(`/api/calendar/delete/`, {_id:id, day:day})
        .then(() => axios.get(`/api/calendar/`))
        .then(response => {
            this.setState({codyList: response.data})
        });
    }
    render(){
        //console.log(this.state.closet);
        return (
            
            <div>
                <CodySelect onUpdate={this.handleUpdate}>{this.state.closet}</CodySelect>
                <WeeklyCal onDelete={this.handleDelete}>{this.state.codyList}</WeeklyCal>
            </div>
            
        );
    } 
}
export default CodyCalander;