import {Link} from 'react-router-dom';
import React from "react";
import style from './menu.module.css';

function Menu() {
    return(
        <>
            <div className={style.panel}>
                <Link className={style.paragraph} to="/">Home</Link>
                <Link className={style.paragraph} to="/categories">Shop</Link>
                <Link className={style.paragraph} to="/contacts">Contacts</Link>
                <Link className={style.paragraph} to="/delivery&payment">Payment and Delivery</Link>
            </div>
        </>
    )
}

export default Menu;