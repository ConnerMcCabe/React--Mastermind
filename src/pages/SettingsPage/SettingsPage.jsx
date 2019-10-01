import React from 'react';
import { Link } from 'react-router-dom'
import './SettingsPage.css';

const SettingsPage = (props) => {
    return(
        <div> 
            <Link className='btn btn-default' to='/'>Home</Link>
            <h1>Settings Page</h1>
        </div>
    )
}


export default SettingsPage