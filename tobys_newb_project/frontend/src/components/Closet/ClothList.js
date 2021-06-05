import React, {Component} from 'react';
import Cloth from './Cloth';

class ClothList extends Component {
    /*리렌더링 최적화!*/
    shouldComponentUpdate(nextProps,nextState){
        return this.props.clothes !== nextProps.clothes;
    }
    

    render() {
        const { clothes, onDelete, onToggle} = this.props;
        const clothList = clothes.map(
            ({_id, text, wished}) => (
                <Cloth
                    _id={_id}
                    text={text}
                    Wished={wished}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    key = {_id} //리렌더링 할 때 효율적으로 작동하기 위함!
                    />
            )
        );

        return (
        <div>
            {clothList}
        </div>
        );
    }
}
export default ClothList;