import { NavLink } from 'react-router-dom';
import '../styles/Footer.scss';

// routes with NavLink to  :
//<NavLink to='/' className={({ isActive}) => isActive ? "footer__menu-link active" : "footer__menu-link"}>A jugar</NavLink>

// className={({ isActive}) => isActive ? "footer__menu-link active" : "footer__menu-link"}

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <NavLink to="/" className="footer__menu-link">
              A jugar
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              to="/instructions"
              className={({ isActive }) =>
                isActive ? 'footer__menu-link active' : 'footer__menu-link'
              }
            >
              ¿Cómo se juega?
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink to="/options" className="footer__menu-link">
              Más opciones
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
  );
};

export default Footer;
