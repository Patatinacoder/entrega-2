import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
export function MovieCard({ movie }) {
    return (
        <li className={styles.movieCard}>
            <Link exact path to={`/detail/${movie.id}`}>
                <div>{movie.name}</div>
                <div>{movie.category}</div>
               
            </Link>
        </li>
    );
}

export default MovieCard;