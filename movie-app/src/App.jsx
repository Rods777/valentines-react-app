import {Routes, Route} from "react-router-dom"
import { NavBar } from './components/NavBar'
import { Home } from "./pages/Home"
import { Favorites } from './pages/Favorites'
import { MovieProvider } from "./contexts/MovieContext"
import "./assets/css/App.css"
export default function App() {

  return (
    <MovieProvider>
      <NavBar/>
      <div className='main-content'>
        {/* Defines Different Routing */}
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/favorites' element={ <Favorites/> }/>
        </Routes>
      </div>
    </MovieProvider>
  )
}