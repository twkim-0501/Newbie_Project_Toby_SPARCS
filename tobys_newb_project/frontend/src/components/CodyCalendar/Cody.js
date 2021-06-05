import React, { Component } from 'react';
import Chips from './Chips';
import './Cody.css';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

class Cody extends Component {

    render () {
        const {cody, day, onDelete} = this.props;
        return (
            <div className="Cody" onClick={() => onDelete(cody._id, day)}>
                <div className="Delete"> 
                    <DeleteOutlineIcon> </DeleteOutlineIcon> 
                </div>
                <div className="Cody-content">
                    <Chips cody={cody}/>
                </div>
            </div>
            
        );
    }
}

export default Cody;