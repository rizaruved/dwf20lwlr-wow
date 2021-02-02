import React from 'react';
import LandingStyles from '../pages/LandingStyles.css';
import WOW from '../assets/images/logo.png';
import LandingBG from '../assets/Background1.png';

function Landing() {
    return ( 
        <div className="container">
            <div className="left-landing-element">
                <img src={WOW} className="landing-image" />
                <p className="landing-text">
                    Sign-up now and subscribe to enjoy all the cool and latest books - 
                    The best book rental service provider in Indonesia
                </p>
                <div className="landing-btn">
                    <button className="signup-btn">Sign Up</button>
                    <button className="signin-btn">Sign In</button>
                </div>
            </div>
            <img src={LandingBG} className="landing-img-bg" />
        </div>
    )
}

export default Landing;