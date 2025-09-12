import { Routes, Route } from 'react-router-dom'
import Header from '@/components/Header/Header.jsx'
import Footer from '@/components/Footer/Footer.jsx'
import Home from '@/pages/Home/Home.jsx'
import About from '@/pages/About/About.jsx'
import Logement from '@/pages/Logement/Logement.jsx'
import NotFound from '@/pages/NotFound/NotFound.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <main role="main" className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function AppRouter() {
  return (
    <Routes>
      {}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
