// import { useEffect, useState } from "react";
// import { useParams } from "react-router";

// export function MovieDetails() {
//   const {movieId} = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     ("detail/:id" + movieId).then((data) => {
//       setMovie(data);
//     });
//   }, [movieId]);

//   if (!movie) {
//     return null;
//   }

//   return (
//     <div >
//       <img
        
//         alt={movie.title}
//       />
//       <div >
//         <p >
//           <strong>Title:</strong> {movie.title}
//         </p>
//         <p>
//           <strong>Genres:</strong>{" "}
//           {movie.genres.map((genre) => genre.name).join(", ")}
//         </p>
//         <p>
//           <strong>Description:</strong> {movie.overview}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default MovieDetails