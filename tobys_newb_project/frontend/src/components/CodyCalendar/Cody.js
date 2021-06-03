import React, { Component } from 'react';
import './Cody.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

class Cody extends Component {

    render () {
        const {cody, onDelete} = this.props;
        return (
            <div className="Cody">
                <div className="Delete" onClick={(e) => {
                    //e.stopPropagation();
                    onDelete(cody.id)
                }}> <DeleteOutlineIcon></DeleteOutlineIcon> </div>
                <div className="Cody-content">
                    ({cody.top} {cody.bottom} {cody.shoes} {cody.outer} {cody.accessory})
                </div>
            </div>
            
        );
    }
}

export default Cody;