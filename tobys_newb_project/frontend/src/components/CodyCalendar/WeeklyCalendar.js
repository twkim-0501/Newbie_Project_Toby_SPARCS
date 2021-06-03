import React, {Component} from 'react';
import './WeeklyCalendar.css';
import DayTemplate from './DayTemplate';
import CodyList from './CodyList';
const Dayslist= [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];
class WeeklyCal extends Component {
    render() {
        let codyList=this.props.children;
        return (
            <div className="days-Box">
            {
                Dayslist.map((day) => {
                    //console.log(codyList[day]);
                    return (
                        //<div></div>
                    
                    <DayTemplate day_name={day}>
                        <CodyList codies={codyList[day]} onDelete={this.props.onDelete}/>
                    </DayTemplate>
                    );
                })
            }
            </div>
        );
    }
}

export default WeeklyCal;