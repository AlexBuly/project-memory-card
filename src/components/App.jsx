import { Pokemon } from './Pokemon';

function App() {
  return (
    <>
      <h1 className='title'>Memory Card</h1>
      <p className='directions'>Get points by clicking on a Pokémon but don't click on any more than once!</p>
      <Pokemon/>
   
    </>
  )
}

export default App

// Get images from API
// Click logic - add cards to list, display in random order
// Score logic - keep score and reset when clicking an image again
// Style
