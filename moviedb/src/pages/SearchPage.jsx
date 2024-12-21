
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/searchPage.css'

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const query = searchParams.get('query'); // Get the search query from URL

  useEffect(() => {
    if (query) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&query=${query}`)
        .then((response) => {
          setSearchResults(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    }
  }, [query]);

  return (
    <div className='search'>
      <h2>Search Results for "{query}"</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                
              />
              <h3>{movie.title}</h3>
              <p>Rating:{movie.vote_average.toFixed(1)} / 10</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchPage;
