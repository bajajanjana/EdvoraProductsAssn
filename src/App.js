import "./App.css";
import Filters from "./Components/Filters/Filters";
import ProductsList from "./Components/products/ProductsList";
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [filters, setFilters] = useState({
    product: "",
    state: "",
    city: "",
  });
  const [productList, setProductList] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState();

  const setAllProducts = (list) => {
    setProductList(list);
  };
  const setAllCompanies = (list) => {
    setCompanyList(list);
  };
  // console.log("allproductlist");
  // console.log(productList);
  const filterProduct = (filters) => {
    let filteredData = [];
    // productList.map((item)=>{
    //   if(item.product_name===filters.product || item.address.state===filters.state || item.address.city===filters.city)
    //   {
    //     filteredData.push(item);
    //   }
    // })
    if (selectedFilter === "state") {
      productList.map((item) => {
        if (item.address.state === filters.state) {
          filteredData.push(item);
        }
      });
    }
    if (selectedFilter === "city") {
      productList.map((item) => {
        if (item.address.city === filters.city) {
          filteredData.push(item);
        }
      });
    }
    if (selectedFilter === "product") {
      productList.map((item) => {
        if (item.product_name === filters.product) {
          filteredData.push(item);
        }
      });
    }
    setFilteredProducts(filteredData);
  };

  useEffect(() => {
    filterProduct(filters);
  }, [filters]);

  // console.log("filtered data");
  // console.log(filteredproducts);
  const updateFilters = (updatedInput, value) => {
    // console.log(url);
    setSelectedFilter(updatedInput);
    return setFilters({
      ...filters,
      [updatedInput]: value,
    });
  };
  // console.log('updated');
  //   console.log("filters");
  //   console.log(filters);
  const url = `https://assessment-edvora.herokuapp.com`;
  return (
    <div className="App">
      <Filters
        filterUpdater={updateFilters}
        setAllProducts={setAllProducts}
        setAllCompanies={setAllCompanies}
      />
      <div className="companyList">
        <div>
        <h2>Edvora</h2>
        <h5>Products</h5>
        </div>
        {selectedFilter != "product" ? (
          companyList.map((item) => {
            return (
              <ProductsList
                initialProductList={productList}
                filteredList={filteredproducts}
                companyName={item}
              />
            );
          })
        ) : (
          <ProductsList
            initialProductList={productList}
            filteredList={filteredproducts}
            companyName={filters.product}
          />
        )}
      </div>
    </div>
  );
}

export default App;
