import React from "react";
import styles from "./ProductList.module.css";
import ProductItem from "./ProcuctItem";
function ProductsList(props) {
  
  return (
    <div className={styles.products}>
      {/* <h2>Edvora</h2>
      <h5>Products</h5> */}
      <div className={styles.companyName}>
        <h6>{props.companyName}</h6>
        <hr
          style={{
            border: "1px solid rgba(203, 203, 203, 0.5)",
            width: "100%",
          }}
        />
      </div>
      <div className={styles.productContainer}>
        {props.filteredList.length === 0 &&
            props.initialProductList.map((item) => {
              if (item.product_name === props.companyName)
                return (
                  <ProductItem product={item} />
                );
              else return null;
            })} 
        {props.filteredList.map((item) => {
          if (item.product_name === props.companyName)
          return (
            <>
            <ProductItem product={item} />
            </>
          );
          else return null;
        })}
      </div>
    </div>
  );
}

export default ProductsList;
