import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 className='movie-name'>MovieDb</h2>
        <ul>
            <li>Popular</li>
            <li>Top Rated</li>
            <li>Upcoming</li>   
        </ul>
        <div className='search-box'>
            <input type='text' placeholder='Search'/>
            <button className='search-button'>Search</button>
        </div>

    </div>
  )
}

export default Navbar