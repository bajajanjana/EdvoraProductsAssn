import React from 'react'
import styles from "./ProductItem.module.css";

function ProductItem(props) {
    return (
        // <div className={styles.product_outer_div}>
        <div className={styles.productItem}>
            <div className={styles.div1}>
                <img src={props.product.image} width="70px" height="70px"></img>
                <div className={styles.product_details_one}>
                    <p style={{color:'#FFFFFF'}}>{props.product.product_name}</p>
                    <p style={{color:'rgba(255, 255, 255, 0.6)'}}>{props.product.brand_name}</p>
                    <p style={{color:'#FFFFFF'}}>${props.product.price}</p>
                </div>
            </div>
            <div className={styles.div2}>
                <div style={{fontSize:'x-small'}} className={styles.div21}>
                    <div className={styles.location}>
                    <p>{props.product.address.state}</p>
                    <p>{props.product.address.city}</p>
                    </div>
                    <div>
                    <p>Date: {props.product.date.substr(0,10)}</p>
                    </div>
                </div>
                <div>
                    <p>{props.product.discription}</p>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default ProductItem
