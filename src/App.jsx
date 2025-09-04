import React from 'react'
import data from './data/logements.json'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <h2>Mon Header</h2>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Mon Footer © Kasa - 2025</p>
      </footer>
    </div>
  );
}

export default App;
