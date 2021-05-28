import React from 'react';
import './ClosetTemplate.css';

const ClosetTemplate = ({form,children}) => {
    return (
        <main className="clothList-template">
            <div className="clothCategory">
                옷 종류
            </div>
            <section className="form-Wrapper">
                {form}
            </section>
            <section className="cloth-Wrapper">
                {children}
            </section>
        </main>
    );
};

export default ClosetTemplate;