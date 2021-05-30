import React from 'react';
import './ClosetTemplate.css';

const ClosetTemplate = ({cloth_category,form,children}) => {
    return (
        <main className="clothList-template">
            <div className="clothCategory">
                {cloth_category}
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