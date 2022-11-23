import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/Item";
import products from "../../data/products";
// import { ItemDetailContainer } from "../ItemDetailContainer";
import styles from "./MoviesGrid.module.css";



export function MoviesGrid(){
const [movies, setMovies]=useState([]);
const {categoryId} = useParams();
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            resolve(products);
        });
        if(!categoryId) promesa.then((data)=> setMovies(data))
        else{
          promesa.then((data)=>
          setMovies(
            data.filter((product)=>product.category===categoryId)
          )
    );
          }
        }, [categoryId]);
        
       

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
            }


export default MoviesGrid;