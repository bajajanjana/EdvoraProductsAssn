import React from "react";
import styles from "./ProductList.module.css";
import ProductItem from "./ProcuctItem";
import Carousel from "react-elastic-carousel";
const breakPoints=[
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4},
  ];

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
      <div className={styles.carouselDiv} id="carousel_div">
      <Carousel breakPoints={breakPoints}>
        {props.filteredList.length === 0 &&
            props.initialProductList.map((item) => {
              if (item.product_name === props.companyName)
                return (
                  <>
                  <ProductItem product={item} />
                  </>
                );
              else 
              {
                return null};
            })} 
        {props.filteredList.map((item) => {
          if (item.product_name === props.companyName)
          return (
            <>
            <ProductItem product={item} />
            </>
          );
          else{
            return null};
        })}
      </Carousel>
      </div>
    </div>
  );
}

export default ProductsList;
