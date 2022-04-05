
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import scoopedLogo from './img/scooped_logo.png'
import { useSelector } from 'react-redux';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser?.id;

  return (
    <div className='navbar-container'>
      <div className='navbar-img-container'>
        <Link to='/'>
          <img src={scoopedLogo} alt="" width='80px'></img>
        </Link>
      </div>
      <nav>
        <ul className='navbar-container-wrapper'>
          <li>
            <NavLink to='/' exact={true} activeClassName='active' style={{ textDecoration: 'none' }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' exact={true} activeClassName='active' style={{ textDecoration: 'none' }}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to='/sign-up' exact={true} activeClassName='active' style={{ textDecoration: 'none' }}>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to={`/users/${userId}`} exact={true} activeClassName='active' style={{ textDecoration: 'none' }}>
              My Profile
            </NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
