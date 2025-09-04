import logoWhite from "../assets/images/logo-white.svg"; 

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__container">
        <img
          src={logoWhite}
          alt="Kasa"
          className="site-footer__logo"
          loading="lazy"
        />
        <p className="site-footer__claim">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
