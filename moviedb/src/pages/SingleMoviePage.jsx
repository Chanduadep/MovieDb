import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/singleMovie.css';

const SingleMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
    .then((response)=>setMovie(response.data))
    .catch((error) => console.error("Error :", error));
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
    .then((response) => setCast(response.data.cast))
    .catch((error) => console.error("Error fetching cast details:", error));
  },[id]);
  if(!movie){
    return <h2>Movies are Loading</h2>
  }
  return (
    <div className="page-container">
      <div className="movie-container">
        <img
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-details">
          <h1>{movie.title}</h1>
          <h1>Overview</h1>
          <p>{movie.overview}</p>
        </div>
      </div>

      <div className="cast-section">
        <h2>Cast</h2>
        <div className="cast-list">
          {cast.map((member) => (
            <div key={member.id} className="cast-member">
              {member.profile_path ? (
                <img
                  className="cast-image"
                  src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                  alt={member.name}
                />
              ) : (
                <p>No image available</p>
              )}
              <p>{member.name} as {member.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default SingleMoviePage;
