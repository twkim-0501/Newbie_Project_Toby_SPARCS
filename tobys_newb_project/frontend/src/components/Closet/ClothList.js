import React, {Component} from 'react';
import Cloth from './Cloth';

class ClothList extends Component {
    render() {
        const { clothes, onDelete , onWish} = this.props;
        const clothList = clothes.map(
            ({id, text, wished}) => (
                <Cloth
                    id={id}
                    text={text}
                    Wished={wished}
                    onWish={onWish}
                    onDelete={onDelete}
                    key = {id} //리렌더링 할 때 효율적으로 작동하기 위함!
                    />
            )
        );

        return (
        <div>
            <Cloth text="옷1"/>
            <Cloth text="옷2"/>
            {clothList}
        </div>
        );
    }
}
export default ClothList;