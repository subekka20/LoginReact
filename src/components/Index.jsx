import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from './Aboutus';
import Register from './Register';
import Signin from './Signin';
import '../Styles/Index.css';

class Index extends Component {
    render() {
        return (
            <div>
                <ul className='Header'>
                    <li><a href='/aboutus'>Aboutus</a></li>
                    <li><a href='/signin'>Sign IN</a></li>
                    <li><a href='/register'>Register</a></li>
                </ul>

                <Router>
                    <Routes>
                        <Route path="/aboutus" element={<Aboutus />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default Index;