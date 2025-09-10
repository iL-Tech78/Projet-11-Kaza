import { Routes, Route, Link } from 'react-router-dom'

// Composants pour mon test
function Home() {
  return <h1>Page d’accueil</h1>
}

function About() {
  return <h1>Page À propos</h1>
}

function App() {
  return (
    <main style={{ padding: '24px' }}>
      {/* Je test ma navigation */}
      <nav style={{ marginBottom: 16 }}>
        <Link to="/" style={{ marginRight: 12 }}>Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>

      {/* La zone où les pages s’affichent selon l’URL du site */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
    </main>
  )
}

export default App
