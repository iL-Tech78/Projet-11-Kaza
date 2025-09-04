// App,jsx sera mon layout global dans lequel je vais mettre (header/footer). 
// Outlet sera la “fenêtre” où React Router rend la page correspondant à la route enfant.
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}