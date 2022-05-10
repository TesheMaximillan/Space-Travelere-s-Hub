import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo192.png';
import style from './Navbar.module.scss';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/rockets',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 2,
      path: '/myprofiles',
      text: 'Myprofile',
    },
  ];

  return (
    <div className={style.nav}>
      <div className={style.nav__links}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="logo-text">Space Traveler&apos;s Hub</h1>
        <ul className="nav__links--link-items">
          {links.map((link) => (
            <li key={link.id} className="item">
              <NavLink to={link.path} className={`item__link ${link.class}`}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
