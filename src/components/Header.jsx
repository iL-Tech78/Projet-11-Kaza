import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="site-header__container">
        <Link to="/" className="logo" aria-label="Kasa — retour à l’accueil">
          <img src={logo} alt="Kasa" />
        </Link>

        <nav className="main-nav" aria-label="Navigation principale">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "main-nav__link" + (isActive ? " is-active" : "")
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              "main-nav__link" + (isActive ? " is-active" : "")
            }
          >
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
