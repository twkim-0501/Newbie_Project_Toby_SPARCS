import React from 'react';
import './ClosetForm.css';
import StarIcon from '@material-ui/icons/Star';
const ClosetForm = ({value, onChange, onCreate, onHighlight}) => {
    return(
        <div className="closetForm">
            <input value={value} onChange={onChange}/>
            <div className="addButton" onClick={onCreate}>
                쏙
            </div>
            <div className="highlight" onClick={onHighlight}>
                <StarIcon></StarIcon>
            </div>
        </div>
    )
}
export default ClosetForm;