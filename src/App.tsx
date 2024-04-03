import './css/App.css'
import './css/Variables.css'
import './css/Animations.css'
import './css/Cube.css'
import './css/PageEvents.css';
import Blocks from './templates/Cubes';


function App() {
  return (
    <div className='app'>
      {/* <OakPlank />
      <CraftingTable />
      <GrassBlock />
      <Cobblestone />
      <Dirt /> */}
      <Blocks.CommandBlock />
    </div>
  )
}

export default App
