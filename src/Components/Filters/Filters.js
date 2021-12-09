import React, { useState, useEffect } from "react";
import styles from "./Filters.module.css";
import * as MdIcon from "react-icons/md";
import axios from "axios";

function Filters(props) {
  const [productList, setProductList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const url = `https://assessment-edvora.herokuapp.com`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        props.setAllProducts(res.data);
        let resArr = res.data;
        const products = [];
        const states = [];
        const cities = [];
        resArr.map((item) => {
          (!products.includes(item.product_name)&& products.push(item.product_name));
          (!states.includes(item.address.state) && states.push(item.address.state));
          (!states.includes(item.address.city)  && cities.push(item.address.city));
        });
        props.setAllCompanies(products);
        setProductList(products);
        setStateList(states);
        setCityList(cities);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  // console.log("productlist");
  // console.log(productList);
  return (
    <div className={styles.filter_outer_div}>
      <div className={styles.filter_inner_div}>
        <h6>Filters</h6>
        <div className={styles.filters}>
          <select
            className={`form-select form-select-sm`}
            aria-label=".form-select-sm example"
            style={{
              backgroundColor: "#232323",
              color: " #FFFFFF",
              border: "none",
            }}
            onChange={(e) => {
              props.filterUpdater("product", e.target.value);
            }}
          >
            <option selected>Product</option>
            {productList.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <select
            className={`form-select form-select-sm`}
            aria-label=".form-select-sm example"
            style={{
              backgroundColor: "#232323",
              color: " #FFFFFF",
              border: "none",
            }}
            onChange={(e) => {
              props.filterUpdater("state", e.target.value);
            }}
          >
            <option selected>State</option>
            {stateList.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <select
            className={`form-select form-select-sm`}
            aria-label=".form-select-sm example"
            style={{
              backgroundColor: "#232323",
              color: " #FFFFFF",
              border: "none",
            }}
            onChange={(e) => {
              props.filterUpdater("city", e.target.value);
            }}
          >
            <option value="2" selected>
              City
            </option>
            {cityList.map((item) => {
               return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
