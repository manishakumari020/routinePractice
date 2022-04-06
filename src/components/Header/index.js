import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="Header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="header-logo"
      />
      <h1 className="logo-heading">Wave</h1>
    </div>
    <ul className="header-list">
      <li className="header-link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="header-link-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="header-link-item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
