import React, {Component} from "react";
import CodySelect from "./CodySelect";
import axios from "axios";

class CodyCalander extends Component {
    state = {
        closet: {}
    }



    render(){
        axios.get(`/api/closet/`)
        .then(response => { this.setState({closet: response.data}) });
        console.log(this.state.closet);

        return (<CodySelect>

        </CodySelect>);
    } 
}
export default CodyCalander;