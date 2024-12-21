import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'


const TopRatedMovies = () => {

    const [movies,setMovies]=useState([])
    const [page,setPage]=useState(1)
    const [totalPages, setTotalPages] = useState(1);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1${page}`)
        .then(response=>{setMovies(response.data.results);
          setTotalPages(response.data.total_pages);})
    },[page])
    const handlePageChange = (page) => {
      setPage(page);
    };
  return (
    <div className='home-page'>
        <h1>TopRated Movies </h1>
        <div className='movie-grid'>
            {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
        </div>
        <Pagination 
        page={page} 
        totalPages={totalPages} 
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default TopRatedMovies