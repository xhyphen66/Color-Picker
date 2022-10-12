import Palette from './Components/Palette';
import seedColors from './Helpers/seedColors';
import { generatePalette } from './Helpers/colorHelper';
import './App.css';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
