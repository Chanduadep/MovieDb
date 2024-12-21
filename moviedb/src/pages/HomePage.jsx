import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'
import '../styles/moviePage.css'

const HomePage = () => {

    const [movies,setMovies]=useState([])
    const [page,setPage]=useState(1)

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`)
        .then(response=>setMovies(response.data.results))
        .catch(error=>console.log(error))
    },[page])
  return (
    <div className='home-page'>
        <h1>Popular Movies </h1>
        <div className='movie-grid'>
            {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
  )
}

export default HomePage