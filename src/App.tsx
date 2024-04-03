import './css/App.css'
import './css/Variables.css'
import './css/Animations.css'
import './css/Cube.css'
import './css/PageEvents.css';
import { Cobblestone, CommandBlock, CraftingTable, Dirt, GrassBlock, OakPlank } from './components/Cube';


function App() {
  return (
    <div className='app'>
      {/* <OakPlank />
      <CraftingTable />
      <GrassBlock />
      <Cobblestone />
      <Dirt /> */}
      <CommandBlock />
    </div>
  )
}

export default App
