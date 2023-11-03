import React from "react";
import styles from '../pages/styles/productCard.module.css';

function ProductCard(props) {
    return (
        <>
            <div className={styles.product_card} data-category={props.category}>
                <div className={styles.img_wrapper}>
                    <img className={styles.product_image} src={props.image} alt=""/>
                </div>
                <div className={styles.product_info}>
                    <p>{props.description}</p>
                </div>
                <div className={styles.product_price}>
                    ${props.price}
                </div>
                <div className={styles.product_availability}>
                    <p>{props.availability}</p>
                </div>
            </div>
        </>
    )
}

export default ProductCard;