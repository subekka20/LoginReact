import React, { Component } from "react";
import '../Styles/Aboutus.css';
import Image from '../img/Image.png';

class Aboutus extends Component {

    render() {

        return (
            <div className="container">
                <div className="header-content">
                    <button className="logo_btn">Logo</button>
                    <button className="about_btn">About US</button>
                </div>
                <div className="content-body">
                    <p className="content-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div className="main-container">
                    <div className="image_container">
                        <img src={Image} alt="About_img" className="about_image" />
                    </div>
                    <div className="para_container">
                        <p className="Para-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        </p>
                        <button className="get_btn">Get Started</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Aboutus;