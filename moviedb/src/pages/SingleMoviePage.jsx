import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
         <h1>{movie.title}</h1>
         <p>{movie.overview}</p>
         <h2>Cast</h2>
      <div className="cast-list">
        {cast.map((members) => (
          <div key={members.id} className="cast-member">
            {members.profile_path ? (
              <img 
                src={`https://image.tmdb.org/t/p/w500${members.profile_path}`} 
                alt={members.name} 
                className="cast-image" 
              />
            ) : (
              <p>No image available</p>
            )}
            <p>{members.name} as {members.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default SingleMoviePage;
