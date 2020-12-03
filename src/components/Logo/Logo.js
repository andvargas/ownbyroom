import classes from './Logo.module.css';
import React from 'react';

function Logo() {
    return (
        <div className={classes.Logo}>
            <img className="App-logo" src="/logo512.png" width="35" height="35" alt="logo" style={{padding:"4px"}}></img>
            <h1>wnbyroom.com</h1>
        </div>
    )
}

export default Logo;