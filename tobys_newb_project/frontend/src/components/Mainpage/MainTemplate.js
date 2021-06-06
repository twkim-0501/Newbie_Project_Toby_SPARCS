import React from 'react';
import './MainTemplate.css';
import Chips from '../CodyCalendar/Chips';
const MainTemplate = ({day,date,children}) => {
    //console.log(children["top"]);
    if(children===1){
        return (
            <main className="Mainpage-template">
                <div className="day">
                    {day}
                </div>
                <section className="cody">
                    정해진 코디가 없습니다!
                </section>
                <section className="date">
                    {date}
                </section>
            </main>
        );
    }
    else{
        return (
            <main className="Mainpage-template">
                <div className="day">
                    {day}
                </div>
                <section className="cody">
                    <Chips cody={children}/>
                </section>
                <section className="date">
                    {date}
                </section>
            </main>
        );
    }

};

export default MainTemplate;