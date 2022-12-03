import React from 'react'
//import styles from "./ItemDetail.modules.css"
import product from "../../data/products"


const ItemDetail = ({movie})=>{
    console.log(movie);
    return(
        <div className="ItemDetail">
            <img src={product.poster} alt="details" />
            <h1>{product.name}</h1>
            <button className="btn btn-danger sm-3">Button</button>
        </div>
    )
}

export default ItemDetail