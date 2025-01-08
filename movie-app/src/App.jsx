import './App.css'
import { MovieCard } from "./components/MovieCard"

export default function App() {

  const movieNum = 1;
 
  return (
    <>
      {movieNum === 1 ? <MovieCard movie={{title: "Bok", genre: "Action, Comedy", release_date: "January 1, 2025"}}/> 
      :
      <MovieCard movie={{title: "Bok2", genre: "Action, Comedy", release_date: "January 1, 2025"}}/>
      }
    </>
  )
}
