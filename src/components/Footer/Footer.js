import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTwitter } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="socialLink">
            <h5>Follow us on</h5>
            <a href="/fb">Facebook</a>
            <a href="/twitter">Twitter</a> 
            <a href="/instagram">Instagram</a>
            <a href="/linkedIn">LinkedIn</a>
            
        </div>
    );
};

export default Footer;