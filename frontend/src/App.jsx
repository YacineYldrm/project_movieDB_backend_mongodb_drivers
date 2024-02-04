import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import Favorites from './pages/Favorites/Favorites'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import AddNewMovie from './pages/AddNewMovie/AddNewMovie'
import FavoriteDetails from './pages/FavoriteDetails/FavoriteDetails'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/favorites'element={<Favorites/>} />
      <Route path='/movie/:movieId'element={<MovieDetails/>} />
      <Route path='/favorites/:movieId'element={<FavoriteDetails/>} />
      <Route path='/add_your_movie'element={<AddNewMovie/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
