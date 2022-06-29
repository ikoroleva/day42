import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Button } from './Button';



function App() {

  const [marginTop, setMarginTop] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  //const [marginBottomState, setMarginBottomState] = useState(0);

  return (
    <div className="App">
      {/* <button onClick={() => { setMarginTopState(marginTopState + 1) }}>Down</button> */}
      <Button text="Down" onclick={() => setMarginTop(marginTop + 1)} />
      <Button text="Up" onclick={() => setMarginTop(marginTop - 1)} />
      <Button text="Right" onclick={() => setMarginLeft(marginLeft + 1)} />
      <Button text="Left" onclick={() => setMarginLeft(marginLeft - 1)} />
      <div className='container'>
        <div className="box" style={{ marginTop: marginTop + 'em', marginLeft: marginLeft + 'em' }}></div>

      </div>

    </div>
  );
}

export default App;
