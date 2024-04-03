import './css/App.css'
import './css/Variables.css'
import './css/Animations.css'
import './css/Cube.css'
import './css/PageEvents.css';
import { BlockList } from './templates/Cubes';

const RandomBlock = BlockList[Math.floor(Math.random() * BlockList.length)];
function App() {

  return (
    <div className='app'>
      {/* <OakPlank />
      <CraftingTable />
      <GrassBlock />
      <Cobblestone />
      <Dirt /> */}
      <RandomBlock />
    </div>
  )
}

export default App
