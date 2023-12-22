import React from "react";
import {Link} from 'react-router-dom';
import Img from '../../elements/img';
import yt from '../../images/icons/icons7-youtube-24.png';
import tk from '../../images/icons/icons7-tiktok-24.png';
import inst from '../../images/icons/icons7-instagram-24.png';
import style from './soc_media.module.css';

function SocialMedia() {
    const handleRegister = () => {
        window.location.href = 'http://127.0.0.1:8000/register';
    }

    const handleLogin = () => {
        window.location.href = 'http://127.0.0.1:8000/login';
    }


    return (
        <>
            <div className={style.footer}>
                <div className={style.leftSide}>
                    <ul className={style.infoList}>
                        <li className={style.infoItem}>
                            <Link to="https://youtube.com">
                                <img src={yt}/>
                            </Link>
                        </li>
                        <li className={style.infoItem}>
                            <Link to="https://instagram.com">
                                <img src={inst}/>
                            </Link>
                        </li>
                        <li className={style.infoItem}>
                            <Link to="https://tiktok.com">
                                <img src={tk}/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.rightSide}>
                    <div className={style.center}>
                        <Link onClick={handleRegister}>Register</Link>
                        <Link onClick={handleLogin}>Log in</Link>
                    </div>
                    <input className={style.input} type="email" id="email" name="email" placeholder="Enter e-mail" required/>
                    <button type="submit">Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default SocialMedia;