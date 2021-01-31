import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/after-login">After Login</Link></li>
            <li><Link to="/subscribe">Subscribe</Link></li>
            <li><Link to="/active-profile">Active Profile</Link></li>
            <li><Link to="/book-detail">Book Detail</Link></li>
            <li><Link to="/read-book">Read Book</Link></li>
            <li><Link to="/add-book">Add Book</Link></li>
            <li><Link to="/transaction-list">Transaction List</Link></li>
        </ul>
    )
}