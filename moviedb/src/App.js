
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SingleMoviePage from './pages/SingleMoviePage';
import UpComingMovie from './pages/UpComingMoviePage';
import TopRatedMovies from './pages/TopRatedMovies';


function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movie/:id' element={<SingleMoviePage/>}/>
        <Route path='/upcoming-movies' element={<UpComingMovie/>}/>
        <Route path='/toprated-movies' element={<TopRatedMovies/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
