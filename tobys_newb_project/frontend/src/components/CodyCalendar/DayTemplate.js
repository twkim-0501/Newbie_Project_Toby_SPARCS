import React from 'react';
import './DayTemplate.css';

const DayTemplate = ({day_name,children}) => {
    return (
        <main className="Day-template">
            <div className="dayName">
                {day_name}
            </div>
            <section className = "cody-Wrapper">
                {children}
            </section>
        </main>
    );
};

export default DayTemplate;