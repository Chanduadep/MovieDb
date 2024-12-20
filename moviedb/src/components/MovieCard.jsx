import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div 
      className="movie-card" 
      onClick={handleCardClick} 
    >
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title}  
      />
      <div >
        <h3>{movie.title}</h3>
        <p>{movie.vote_average.toFixed(1)} / 10</p>
      </div>
    </div>
  );
};

export default MovieCard;
