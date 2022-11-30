import products from "../../data/products";
import { useEffect, useState } from "react";
 import {  useParams } from "react-router-dom";
 import styles from "./ItemDetail.modules.css"



          export function ItemDetailContainer() {
            const [movie, setMovie] = useState({});
            const { id } = useParams();
        console.log(id);
            useEffect(() => {
                const promesa = new Promise((resolve, reject) => {
                    resolve(products);
                }); 
                promesa
                
                .then((result)=>{setMovie(result.find(movie=> movie.id === parseInt(id) ))})
                .catch((error)=>{console.log('Error');})
            },[id]);
            return (
               

                <div className={styles.detailsContainer}>
                    
            
                <h1 className={styles.movieDetails}>{movie.name}</h1>
                <h2 className={styles.movieDetails}>{movie.description}</h2>
                <h2 className={styles.firstItem}>{movie.stock}</h2>
                </div>

        
                

              
            )
            
            }

                
          





          