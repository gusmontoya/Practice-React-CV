import React from 'react';
import { OctoCat, Twitter, Instagram, LinkedIn } from './import';

export default function Footer() {
    return (
        <footer>
            <ul className="social-list">
            <li className="footer--github"><a href="https://github.com/gusmontoya"><img src={OctoCat} alt="Github-logo" width="47px"/></a></li>
                <li className="footer--twitter"><a href="https://twitter.com/gmontya"><img src={Twitter} alt="Twitter-logo"  width="47px" /></a></li>
                <li className="footer--insta"><a href="https://www.instagram.com/daisosasen01/"><img src={Instagram} alt="Insta-logo"  width="47px" /></a></li>
                <li className="footer--insta"><a href="https://www.linkedin.com/in/gusmontoya/"><img src={LinkedIn} alt="LinkedIn-logo"  width="47px" /></a></li>
            </ul>
        </footer>
    )
}