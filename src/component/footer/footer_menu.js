import React from "react";
import {Link} from 'react-router-dom';
import style from './footer_menu.module.css';
import SocialMedia from "./social_media";

function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.footer_column}>
                    <h3>Contact Information</h3>
                    <hr/>
                    <ul>
                        <li>Email: example@email.com</li>
                        <li>Phone: (123) 456-7890</li>
                    </ul>
                </div>
                <div className={style.footer_column}>
                    <h3>Categories</h3>
                    <hr/>
                    <ul>
                        <li><Link to ="/category">Vinyl records</Link></li>
                        <li><Link to ="/category">Record players</Link></li>
                        <li><Link to ="/category">Gaming consoles</Link></li>
                    </ul>
                </div>
                <div className={style.footer_column}>
                    <h3>Links</h3>
                    <hr/>
                    <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/category">Shop</Link></li>
                        <li><Link to ="/contacts">About Us</Link></li>
                    </ul>
                </div>
                
            </footer>
            <div className={style.underlay}>
                <hr/>
            </div>
            <SocialMedia/>
        </>
    )
}

export default Footer;