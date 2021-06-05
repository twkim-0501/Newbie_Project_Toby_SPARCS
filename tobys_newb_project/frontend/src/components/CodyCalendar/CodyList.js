import React, {Component} from 'react';
import Cody from './Cody';

class CodyList extends Component {
    render() {
        const { codies, onDelete, day } = this.props;
        const codyList = codies.map(
            (cody) => (
                <Cody
                    cody={cody}
                    day={day}
                    onDelete={onDelete}
                    key = {cody._id}
                />
            )
                
        );
        return (
            <div> {codyList} </div>
        );
    }
}

export default CodyList;