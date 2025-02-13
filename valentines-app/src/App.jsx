import { Mail } from './components/Mail'
import { useAppContext } from './contexts/AppContext'
import { Accepted } from './components/Accepted';

function App() {
  const { isYes } = useAppContext();

  return (
    <>
      {!isYes ? 
        <Mail/> 
        : 
        <Accepted/>}
    </>
  )
}

export default App