import React, { useState } from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };
  return (
    <div className='navbar'>
        <h2 className='movie-name' onClick={() => navigateTo('/')}>MovieDb</h2>
        <ul>
            <li onClick={() => navigateTo('/')}>Popular</li>
            <li onClick={()=> navigate('/toprated-movies')}>Top Rated</li>
            <li onClick={()=> navigate('/upcoming-movies')}>Upcoming</li>   
        </ul>
        <div className='search-box'>
            <input type='text' placeholder='Search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}/>
            <button className='search-button' onClick={handleSearch}>Search</button>
        </div>

    </div>
  )
}

export default Navbar