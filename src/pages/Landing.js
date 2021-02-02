import React from 'react';
import PagesStyles from '../pages/PagesStyles.css';
import WOW from '../assets/WindowOfWorld.png';

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
        </div>
    )
}

export default Landing;