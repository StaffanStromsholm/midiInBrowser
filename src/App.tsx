import { useEffect } from 'react';
import { onMIDISuccess, onMIDIFailure } from './utils';
import './App.css';

//notes C -> B
const level1Notes = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72];

function App() {
  useEffect(() => {
    if(navigator.requestMIDIAccess){
      console.log("Web midi is supported in this browser");
      navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
  } else {
      console.log("Web midi is not supported");
  }
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Midi test
        </p>
      </header>
    </div>
  );
}

export default App;
