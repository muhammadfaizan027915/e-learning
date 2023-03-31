import React from 'react';
import './Contactcard.css'

const Contactcard = ({icon, heading, detail}) => {
    return (
        <div className='contactcad'>
            <div className='contacticon'>
                <i className={icon}></i>
            </div>
            <div className='contactcontent'>
                <h3>{heading}</h3>
                <p>{detail}</p>
            </div>
        </div>
    );
}

export default Contactcard;
