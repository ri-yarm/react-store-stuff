/* eslint-disable no-undef */
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import './Header.less';

import logo from '../../img/logo.svg';
import avatar from '../../img/avatar.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="info">
        <div className="logo">
          <Link to={ROUTES.HOME}>
            <img src={logo} alt=" logo." />
          </Link>
        </div>

        <div className="user">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className="username">rint</div>
        </div>

        <form className="form">
          <div className="icon">
            <svg className="icon">
              <use xlinkHref={`/sprite.svg#search`} />
            </svg>
          </div>
          <div className="input">
            <input
              type="search"
              name="search"
              placeholder="search..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>

          <div className="box"></div>
        </form>

        <div className="account">
          <Link to={ROUTES.HOME} className="favourites">
            <svg className="icon-fav">
              <use xlinkHref={`/sprite.svg#heart`} />
            </svg>
          </Link>

          <Link to={ROUTES.CART} className="cart">
            <svg className="icon-cart">
              <use xlinkHref={`/sprite.svg#bag`} />
            </svg>
            <span className="count">2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
