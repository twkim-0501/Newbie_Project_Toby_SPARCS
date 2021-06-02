import React, {Component} from "react";
import CodySelect from "./CodySelect";
import axios from "axios";

class CodyCalander extends Component {
    state = {
        closet: {}
    }
    componentDidMount() {
        axios.get(`/api/closet/`)
        .then(response => { this.setState({closet: response.data}) });
    }

    render(){
        console.log(this.state.closet);

        return (<CodySelect>

        </CodySelect>);
    } 
}
export default CodyCalander;