import react from 'react';
import { useState } from 'react';

import './App.css';

function App() {
  const [paragraph, setParagraph] = useState("Push the button");

  return (
    <div className="App">
      <h1>Hello react!</h1>
      <button onClick={() => setParagraph("Button wroks good!")}>Push me</button>
      <p>{paragraph}</p>
    </div>
  );
}

export default App;
