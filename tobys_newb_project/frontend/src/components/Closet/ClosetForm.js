import React from 'react';
import Closet from './Closet';
import './ClosetForm.css';
const ClosetForm = ({value, onChange, onCreate}) => {
    return(
        <div className="closetForm">
            <input value={value} onChange={onChange}/>
            <div className="addButton" onClick={onCreate}>
                쏙
            </div>
        </div>
    )
}
export default ClosetForm;