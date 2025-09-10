import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import logements from './data/logements.json';

function App() {
  return (
    <main style={{ padding: '24px' }}>
      <h1>Kasa — Test Json</h1>

      <p>Nombre de logements chargés : <strong>{logements.length}</strong></p>

      <ul>
        {logements.map((l) => (
          <li key={l.id}>
            <strong>{l.title}</strong> — {l.location}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
