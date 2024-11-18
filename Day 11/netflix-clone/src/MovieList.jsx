import movies from "./movies";
import "./MovieList.css";

const MovieList = () => {
  return (
    <div className="movie-list">
     {movies.map((movie)=>(
      <div key={movies.id} className="movie-card">
           <img src={movie.image}  className="movie-image"/>
           <h1>Title:{movie.title}</h1>
           <h2>Language:{movie.language}</h2>
           <h2>Cost:{movie.cost}</h2>
      </div>))}
    </div>
  )
}

export default MovieList