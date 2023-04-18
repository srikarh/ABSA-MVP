import './App.css';
import Ticket from './Component/Ticket';
import React from 'react';


/*function App() {
  return (
    <div className="App">
      <h3 className="heading">Action Item Tracker</h3>
      <TicketList></TicketList>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
    <div>
      <h1>Ticketing System</h1>
      <Ticket />
    </div>
  );
}

export default App;
