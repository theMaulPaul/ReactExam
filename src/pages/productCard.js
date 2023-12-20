import React from "react";
import styles from '../pages/styles/productCard.module.css';

function ProductCard(props) {
    return (
        <>
            <div className={styles.product_card} data-category={props.category}>
                <div className={styles.img_wrapper}>
                    <img className={styles.product_image} src={"/img/" + props.image} alt="image"/>
                </div>
                <div className={styles.product_info}>
                    <p>{props.description}</p>
                </div>
                <div className={styles.product_price}>
                    ${props.price}
                </div>
                <div className={styles.product_availability} style={{color: props.textColor}}>
                    <p>{props.availability}</p>
                </div>
            </div>
        </>
    )
}

export default ProductCard;