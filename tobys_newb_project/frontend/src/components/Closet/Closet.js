import React, {Component} from "react"
import ClosetTemplate from './ClosetTemplate';
import ClosetForm from './ClosetForm';
import ClothList from './ClothList';
class Closet extends Component {

    state = {
        input: '',
        Clothes:  [
            { id:0, text: '옷1', wished: false},
            { id:0, text: '옷2', wished: true}
        ]
    }
    render(){
        return (
            //<div>This is Closet page.</div>
            <ClosetTemplate form={<ClosetForm/>}>
                <ClothList/>
            </ClosetTemplate>
        );
    }
}
export default Closet;