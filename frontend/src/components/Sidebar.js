import React, { useState } from 'react';
import '../assets/css/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ props }) => {
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar_section'>
                    <FontAwesomeIcon icon={faHouse}/>
                    <h5>Hola</h5>
                </div>
            </div>          
        </>
    );
};

export default Sidebar;