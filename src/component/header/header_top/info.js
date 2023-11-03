import React from "react";
import {Link} from 'react-router-dom';
import style from './info.module.css';
import yt from '../../../images/icons/icons8-youtube-24.png'
import tk from '../../../images/icons/icons8-tiktok-24.png'
import inst from '../../../images/icons/icons8-instagram-24.png'

function Info() {
    return(
        <>
            <div className={style.headerTop}>
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
                    <ul className={style.infoList}>
                        <li className={style.infoItem}>
                            <Link to="/delivery&payment">Delivery & Payment
                            </Link>
                        </li>
                        <li className={style.infoItem}>
                            <Link to="/contacts">Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Info;