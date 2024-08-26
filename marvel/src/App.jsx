import './App.css'
import { useState } from 'react'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'

function App() {
const [selectedHero, setSelectedHero] = useState(null);

  return (
    <>
    <div className="mainContainer">
      <CharacterList onCharacterSelect={setSelectedHero}/>
    </div>
      <CharacterDetail characterId={selectedHero}/>
    </>
  )
}

export default App