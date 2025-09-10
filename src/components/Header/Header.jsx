import { NavLink } from 'react-router-dom'
import logo from '@/assets/images/logo-kasa-red.svg'
import './Header.scss'

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container header__inner">
        <a href="/" className="header__brand" aria-label="Kasa — retour à l’accueil">
          <img src={logo} alt="Kasa" className="header__logo" />
        </a>

        <nav aria-label="Navigation principale" className="header__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
