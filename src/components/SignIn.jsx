import React, { Component } from 'react';

import { auth, SignInWithGoogle } from "./../firebase/utils"
import GoogleButton from 'react-google-button';
const initialState = {
    email: "",
    password: ""
};

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState ({
                ...initialState,
            });
        } catch (err) {
            console.log(err);
        }
    };
   
    render() {
        const { email, password } = this.state;
        return (
            <div className="signIn">
              <div className="wrap">
                  <h1> Login </h1>

                  <div className="formWrap">
                      <form onSubmit={this.handleSubmit}>
                         <input type="email" name="email" value={email} placeholder="password" handleChange={this.handleChange}>
                         </input>
                         <input type="password" name="password" value={password} placeholder="Password" handleChange={this.handleChange}></input>
                         <button type="submit">Log In</button>
                         <div className="row">
                             <GoogleButton onClick={SignInWithGoogle}/>
                         </div>
                      </form>
                  </div>
              </div>
            </div>
        )
    }

    
    

};
export default SignIn;