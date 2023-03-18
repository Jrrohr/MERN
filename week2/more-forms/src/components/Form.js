import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [ firstNameError, setFirstNameError ] = useState("");
    const [lastName, setLastName] = useState("");
    const [ lastNameError, setLastNameError ] = useState("");
    const [email, setEmail] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const [password, setPassword] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");
    const [ confirmPasswordError, setConfirmPasswordError ] = useState("");

    const createUser = (e) => {
        // preventing default refresh of the browser to keep our state from being reset
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const firstNameValidate = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters long");
        } else {
            setFirstNameError("");
        }
    }

    const lastNameValidate = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters long");
        } else {
            setLastNameError("");
        }
    }

    const emailValidate = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters long");
        } else {
            setEmailError("");
        }
    }

    const passwordValidate = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
        } else {
            setPasswordError("");
        }
        if(e.target.value === confirmPassword) {
            setConfirmPasswordError("");
        } else {
            setConfirmPasswordError("Passwords must match");
        }
    }

    const confirmPasswordValidate = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value === password) {
            setConfirmPasswordError("");
        } else {
            setConfirmPasswordError("Passwords must match");
        }
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={ firstNameValidate } />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={ lastNameValidate } />
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={ emailValidate } />
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ passwordValidate } />
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                    {
                        confirmPasswordError ?
                        <p>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ confirmPasswordValidate } />
                </div>
                {
                    firstNameError || lastNameError || emailError || passwordError || confirmPasswordError ?
                    <input type="submit" value="Create User" disabled /> :
                    <input type="submit" value="Create User" />
                }
            </form>
            <p>First name: { firstName }</p>
            <p>Last name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPassword }</p>
        </div>
    );
};

export default Form;