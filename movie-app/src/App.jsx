import './App.css'
import {Routes, Route} from "react-router-dom"
import { NavBar } from './components/NavBar'
import { Home } from "./pages/Home"
import { Favorites } from './pages/Favorites'
export default function App() {

  return (
    <>
       <NavBar/>
      <div className='main-content'>
        {/* Defines Different Routing */}
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/favorites' element={ <Favorites/> }/>
        </Routes>
      </div>
    </>
  )
}