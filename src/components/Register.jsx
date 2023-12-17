import React, { Component } from "react";
import '../Styles/Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faLock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordVisible: false,
            password: '',
            confirmPassword: '',
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

    handleConfirmPasswordChange = (e) => {
        this.setState({ confirmPassword: e.target.value });
    };

    render() {
        return (
            <div className="reg_container">
                <button className="sign_logo_btn">Logo</button>
                <div className="left_reg-container">
                    <h3 className="welcome">Welcome Back!</h3>
                    <p className="welcome_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <button className="signin_btn"><a href="/signin">SIGN IN</a></button>
                </div>
                <div className="right_reg-container">
                    <h3 className="create_account"> Create an Account</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="register_container">
                            <div className="username_content">
                                <label htmlFor="username">User name</label>
                                <br />
                                <div className="icon_container">
                                    <input className="username_container" type="text" name="username" id="username" placeholder="Your user name" required />
                                </div>
                            </div>
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
                                        className="eye-icons"
                                        onClick={this.togglePasswordVisibility}
                                    />
                                </div>
                            </div>
                            <div className="cpassword_content">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <br />
                                <div className="icon_container">
                                    <FontAwesomeIcon icon={faLock} className="lock-icon" />
                                    <input
                                        className="cpassword_container"
                                        type={this.state.passwordVisible ? 'text' : 'password'}
                                        name="cpassword"
                                        id="cpassword"
                                        placeholder="Re-enter your password"
                                        value={this.state.confirmPassword}
                                        onChange={this.handleConfirmPasswordChange}
                                        required />
                                    <FontAwesomeIcon
                                        icon={this.state.passwordVisible ? faEye : faEyeSlash}
                                        className="eye-icons"
                                        onClick={this.togglePasswordVisibility}
                                    />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="reg_btn">REGISTER</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;