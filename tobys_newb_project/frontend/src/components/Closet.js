import React, {Component} from "react"
import ClosetTemplate from './ClosetTemplate';
import ClosetForm from './ClosetForm';
class Closet extends Component {
    render(){
        return (
            //<div>This is Closet page.</div>
            <ClosetTemplate form={<ClosetForm/>}>
                옷장
            </ClosetTemplate>
        );
    }
}
export default Closet;