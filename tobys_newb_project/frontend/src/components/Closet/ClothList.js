import React, {Component} from 'react';
import Cloth from './Cloth';

class ClothList extends Component {
    render() {
        const { clothes, onDelete , onWish} = this.props;
        return (
        <div>
            <Cloth text="옷1"/>
            <Cloth text="옷2"/>
        </div>
        );
    }
}
export default ClothList;