import React from 'react'
import "./section-title.styles.css";

const SectionTitle = ({sectionTitle}) => {
    return (
        <div className="section-title">
            <span>{ sectionTitle }</span>
        </div>
    )
}

export default SectionTitle;
