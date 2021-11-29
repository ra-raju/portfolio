import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="nav-ul">
          <li>
            <Link className="navlink" to="/home">
              HOME
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/contact">
              contact
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/portfolio">
              portfolio
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/blog">
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
