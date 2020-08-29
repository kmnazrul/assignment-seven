import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTwitter } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="socialLink">
            <h5>Follow us on</h5>
            <a href="https://www.facebook.com/K.M.NAZRUL">Facebook</a>
            <a href="https://twitter.com/k_nazrul">Twitter</a> 
            <a href="https://www.instagram.com/k.m.nazrul/">Instagram</a>
            <a href="https://www.linkedin.com/in/nazrul-islam-6525289b/">LinkedIn</a>
            
        </div>
    );
};

export default Footer;