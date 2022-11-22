import { useEffect, useState } from "react";
import Ad from "../../components/Ad";
import MovieCard from "../../components/Item";
import products from "../../data/products";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    console.log("🚀 ~ file: index.jsx ~ line 10 ~ MoviesGrid ~ movies", movies);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            resolve(products);
        });
        promesa.then((data) => setMovies(data));
    }, []);

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}
<Ad>
    <h1>Este es un anuncio molesto</h1>
    <button>cerrar anuncio</button>
</Ad>;

export default MoviesGrid;