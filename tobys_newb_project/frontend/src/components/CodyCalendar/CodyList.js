import React, {Component} from 'react';
import Cody from './Cody';

class CodyList extends Component {
    render() {
        const { codies, onDelete } = this.props;
        const codyList = codies.map(
            (cody) => (
                <Cody
                    cody={cody}
                    onDelete={onDelete}
                    key = {cody.id}
                />
            )
                
        );
        return (
            <div> {codyList} </div>
        );
    }
}

export default CodyList;