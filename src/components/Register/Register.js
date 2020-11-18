import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import '../LoginPage/LoginPage.module.css';
import Input from '../UI/Input/Input';

class Register extends Component {
    state = {
        registrationForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Full Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: ''
            }
        },
        formSubmitted: false
    }

    registerDataHandler = (e) => {
        e.preventDefault()
        const formData = {};
        for (let formElementIdentifier in this.state.registrationForm) {
            formData[formElementIdentifier] = this.state.registrationForm[formElementIdentifier].value;
        }
        const user = {
            regData: formData,
            timestamp: Date.now()
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

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedRegForm = {
            ...this.state.registrationForm
        };
        const updatedFormElement = {
            ...updatedRegForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedRegForm[inputIdentifier] = updatedFormElement;
        this.setState({registrationForm: updatedRegForm})
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.registrationForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registrationForm[key]
            });
        }
        let redirect = null;
        if (this.state.formSubmitted) {
            redirect = <Redirect to="/thankyou" />
        }
        return (
            <div>
                {redirect}
                <h1>ownbyroom.com</h1>
                <p>Pre-register and subscribe to our news to get notified when we go live.</p>
                <form onSubmit={this.registerDataHandler}>
                    {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                    ))}
                    <button>REGISTER</button>

                </form>
            </div>
        )
    }
}

export default Register;