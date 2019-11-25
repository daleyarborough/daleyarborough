import React from 'react';
import './App.css';
import App1 from './patientAPI';
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Image src="./logo192.jpg" roundedCircle />
          <App1></App1>
        
      </header>
    </div>
  );
}

export default App;
