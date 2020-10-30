import React, { Component } from 'react';

import classes from './LoginPage.module.css';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>ownbyroom.com</h1>
                <p>Pre-register and subscribe to our news to get notified when we go live.</p>
                <form id={classes.loginForm}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name"/>
                    </div>
                    <div className={classes.formGroup}>
                        <label>Email address: </label>
                        <input type="email" name="email" />
                    </div>
                    <div className={classes.formGroup}>
                        <button>Register</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default LoginPage;