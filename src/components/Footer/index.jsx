import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import logo from '../../img/logo.svg';
import './Footer.less';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img src={logo} alt=" logo." />
        </Link>
      </div>

      <div className="rights">
        {new Date().getFullYear()} Ярмухаметов Ринат
      </div>
    </footer>
  );
};

export default Footer;
