import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'


const HomePage = () => {

    const [movies,setMovies]=useState([])
    const [page,setPage]=useState(1)

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`)
        .then(response=>setMovies(response.data.results))
        .catch(error=>console.log(error))
    },[page])
  return (
    <div>
        <h1></h1>
        <div className=''>
            {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
  )
}

export default HomePage