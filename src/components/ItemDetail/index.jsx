import React from 'react'
//import styles from "./ItemDetail.modules.css"
import "../Item/index"
import styles from "./styles.css"

const ItemDetail = ({movie})=>{
    console.log(movie);
    return(
        <div className="detailsContainer">
            <div className="col">
            <img  className="movieImage"src={movie.poster} alt="details" />
            <h1 className="movie.details">{movie.name}</h1>
            <h2 className="movie.details">{movie.description}</h2>
            <button className={styles.button}>Button</button>
            </div>
            
        </div>
    )
}

export default ItemDetail