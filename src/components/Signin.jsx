import React, { Component } from "react";
import '../Styles/Signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faLock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordVisible: false,
            password: '',
        };
    }

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            passwordVisible: !prevState.passwordVisible,
        }));
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-in logic here
        console.log('Email:', e.target.email.value);
        console.log('Password:', this.state.password);
    };

    render() {
        return (
            <div className="sign_container">
                <button className="sign_logo_btn">Logo</button>
                <div className="left-container">
                    <h3 className="para_1">New here?</h3>
                    <p className="para_2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <button className="register_btn"><a href="/register">REGISTER</a></button>
                </div>
                <div className="right-container">
                    <h3 className="sign_in"> Sign In</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form_container">
                            <div className="email_content">
                                <label htmlFor="email">Email</label>
                                <br />
                                <div className="icon_container">
                                    <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
                                    <input className="email_container" type="email" name="email" id="email" placeholder="Your email" required />
                                </div>
                            </div>
                            <div className="password_content">
                                <label htmlFor="password">Password</label>
                                <br />
                                <div className="icon_container">
                                    <FontAwesomeIcon icon={faLock} className="lock-icon" />
                                    <input className="password_container"
                                        type={this.state.passwordVisible ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        placeholder="Your password"
                                        value={this.state.password}
                                        onChange={this.handlePasswordChange}
                                        required
                                    />
                                    <FontAwesomeIcon
                                        icon={this.state.passwordVisible ? faEye : faEyeSlash}
                                        className="eye-icon"
                                        onClick={this.togglePasswordVisibility}
                                    />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="submit_btn">SIGN IN</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;
