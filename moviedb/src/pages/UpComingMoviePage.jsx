import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'


const UpComingMovie= () => {

    const [movies,setMovies]=useState([])
    const [page,setPage]=useState(1)

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1${page}`)
        .then(response=>setMovies(response.data.results))
        .catch(error=>console.log(error))
    },[page])
  return (
    <div className='home-page'>
        <h1>Upcoming Movies</h1>
        <div className='movie-grid'>
            {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
  )
}

export default UpComingMovie