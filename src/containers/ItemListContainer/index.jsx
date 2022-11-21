import { useEffect, useState } from "react";
import { get } from "../../utils/httpClient"
import styles from "./MoviesGrid.module.css";
import MovieCard from "../../components/Item";
import Ad from "../../components/Ad"


export function MoviesGrid() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
    
  );
  
}<Ad>
<h1>Este es un anuncio molesto</h1>
<button>cerrar anuncio</button>
</Ad>




export default  MoviesGrid

