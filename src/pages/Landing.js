import React from 'react';
// import { Col, Container, Row, Modal } from 'react-bootstrap';
import WOW from "../assets/images/logo.png"

function Landing() {
    return ( 
        <div className="container">
            <div className="d-flex justify-content-start row">
                <div className="col-md-6 col-sm-8">
                    <img src={WOW}>
                </div>
            </div>
        </div>
    )
}

export default Landing;