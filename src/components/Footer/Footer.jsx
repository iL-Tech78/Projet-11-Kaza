import logoWhite from '@/assets/images/logo-kasa-white.svg'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <img src={logoWhite} alt="Kasa" className="footer__logo" />
        <p className="footer__legal">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
