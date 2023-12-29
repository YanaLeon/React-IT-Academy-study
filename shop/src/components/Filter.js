import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { filterStockAction, filterCategoryAction, setData, filterPriceAction } from "../redux/productsSlice.js";

import { getLink } from "../redux/linkSlice.js";
import { useNavigate } from "react-router-dom";

import './Filter.css';

import {useParams} from "react-router-dom";

export default function Filter() {

    const products = useSelector( state => state.products.products );
    const stock = useSelector( state => state.products.inStock);
    const category = useSelector( state => state.products.category);
    const copy= useSelector( state => state.products.copy);
    const price = useSelector( state => state.products.price);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    let uri;

    const params = useParams();
    let filterStockURL;
    let filterCategoryURL;
    let filterPriceURL;
    if(params.filter) {
        filterStockURL = JSON.parse(params.filter.slice(1, 6));
        dispatch( filterStockAction(filterStockURL) );
    }
    if(params.category) {
        filterCategoryURL = params.category.slice(1, 6);
        dispatch( filterCategoryAction(filterCategoryURL) );
        console.log(filterCategoryURL)
    }
    if(params.price) {
        filterPriceURL = params.price.slice(1, 15);
        dispatch( filterPriceAction(filterPriceURL) );
    }
    console.log(filterCategoryURL)

    useEffect(() => {
        
        if(products) {
            let newData = [...copy];
            
            if(stock) {
                newData = newData.filter(client => {
                    return client.quantity > 0;
                })
            }
            
            if(category !== "All") {
                newData = newData.filter(client => {
                    return client.category === category;
                });
            }
            
            if(price === "ascending") {
                newData = newData.sort((a, b) => {
                    return a.cost - b.cost
                })
            }
            
            if(price === "descending") {
                newData = newData.sort((a, b) => {
                    return b.cost - a.cost
                })
            }
            
            dispatch( setData (newData) );
       }
    }, [stock, category, price, copy]);

    function filterStock (eo) {
        console.log(category)
        dispatch( filterStockAction(eo.target.checked) );
        uri = "/products/:1/:"+eo.target.checked+"/:"+category+"/:"+price;
        navigate(uri);
    };

    function filterCategory (eo) {
        dispatch( filterCategoryAction(eo.target.value) );
        uri = "/products/:1/:"+stock+"/:"+eo.target.value+"/:"+price;
        navigate(uri);
    };

    function filterPrice (eo) {
        dispatch( filterPriceAction(eo.target.value) );
        uri = "/products/:1/:"+stock+"/:"+category+"/:"+eo.target.value;
        navigate(uri);
     };

  return (
    <div className="filter">
        <span>See only:</span>
        <input type='checkbox' className = "custom-checkbox" id="stock" checked = {stock} onChange={filterStock}/>
        <label htmlFor="stock">In stock</label>
        <label htmlFor="category">Category:
            <select id="category" className = "custom-select" value={category} onChange={filterCategory}>
              <option value="All">All</option>
              <option value="sofa">Sofa</option>
              <option value="lamp">Lamp</option>
              <option value="armchairs">Armchairs</option>
              <option value="bed">Bed</option>
              <option value="vases">Vases</option>
              <option value="cabinets">Cabinets</option>
              <option value="dinnerware">Dinnerware</option>
            </select>
        </label>
        <label htmlFor="price">Price:
            <select id="price" className = "custom-select" value={price} onChange={filterPrice}>
                <option value="Not selected">Not selected</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </label>
    </div>
  )
}

