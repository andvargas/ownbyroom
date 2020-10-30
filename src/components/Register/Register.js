import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import classes from '../LoginPage/LoginPage.module.css';

class Register extends Component {
    state = {
        name: '',
        email: '',
        formSubmitted: false
    }

    registerDataHandler = (e) => {
        e.preventDefault()
        const user = {
            name: this.state.name,
            email: this.state.email
        }
        axios.post('https://ownbyroom.firebaseio.com/users.json', user)
            .then(response => {
                console.log(response)
                this.setState({ formSubmitted: true })
            })
            .catch(error => {
                console.log(error)
            })
        
    }

    render() {
        let redirect = null;
        if (this.state.formSubmitted) {
            redirect = <Redirect to="/thankyou" />
        }
        return (
            <div>
                {redirect}
                <h1>ownbyroom.com</h1>
                <p>Pre-register and subscribe to our news to get notified when we go live.</p>
                <form id={classes.loginForm}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                    </div>
                    <div className={classes.formGroup}>
                        <label>Email address: </label>
                        <input type="email" name="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                    </div>
                    <div className={classes.formGroup}>
                        <button onClick={this.registerDataHandler}>REGISTER</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Register;