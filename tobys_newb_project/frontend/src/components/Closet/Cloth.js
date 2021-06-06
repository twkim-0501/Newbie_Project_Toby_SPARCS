import React, { Component } from 'react';
import './Cloth.css';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

class Cloth extends Component {
    shouldComponentUpdate(nextProps,nextState){
        return (this.props.Wished !== nextProps.Wished) || (this.props.is_highlight !== nextProps.is_highlight);
    }
    render() {
        const { _id, text, Wished, onDelete, onToggle, is_highlight} = this.props;
        console.log(is_highlight);
        if(is_highlight === 0){
            return (
                /*위시 체크!, (렌더링될 때 호출 되므로 ()=> 이런식으로)*/
                <div className="Cloth" onClick={() => onToggle(_id)}>
                    <div className="Delete" onClick={(e) => {
                        e.stopPropagation(); //삭제버튼 누를 때, 위시 체크 안되게 하기!
                        onDelete(_id)
                    }}>
                        <DeleteOutlineIcon></DeleteOutlineIcon>
                    </div>
                    <div className="Cloth-name">
                        {text}
                    </div>
                    {
                        Wished ? 
                        <div className="Wish-mark">
                            <StarIcon></StarIcon>
                        </div> : 
                        <div className="Wish-mark">
                            <StarBorderIcon></StarBorderIcon>
                        </div>
                    }
                </div>
            )
        }
        else{
            if(Wished){
                return (
                    /*위시 체크!, (렌더링될 때 호출 되므로 ()=> 이런식으로)*/
                    <div className="Cloth_h" onClick={() => onToggle(_id)}>
                        <div className="Delete" onClick={(e) => {
                            e.stopPropagation(); //삭제버튼 누를 때, 위시 체크 안되게 하기!
                            onDelete(_id)
                        }}>
                            <DeleteOutlineIcon></DeleteOutlineIcon>
                        </div>
                        <div className="Cloth_h-name">
                            {text}
                        </div>
                        <div className="Wish-mark">
                            <StarIcon></StarIcon>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    /*위시 체크!, (렌더링될 때 호출 되므로 ()=> 이런식으로)*/
                    <div className="Cloth" onClick={() => onToggle(_id)}>
                        <div className="Delete_h" >
                            <DeleteOutlineIcon></DeleteOutlineIcon>
                        </div>
                    </div>
                )
            }

        }
    }
}

export default Cloth;