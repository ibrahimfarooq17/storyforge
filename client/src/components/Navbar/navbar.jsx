/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';
import { handleDropdown, handleMobileDropdown } from '../../common/navbar';

const Navbar = ({ lr, nr, theme, aboutRef, aimRef, betaRef, teamRef }) => {
  const executeAboutScroll = () =>
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const executeAimScroll = () =>
    aimRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const executeBetaScroll = () =>
    betaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const executeTeamScroll = () =>
    teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === 'themeL' ? 'light' : ''
      }`}
    >
      <div className='container'>
        <Link href='/'>
          <a className='logo'>
            {theme ? (
              theme === 'themeL' ? (
                <img ref={lr} src={appData.darkLogo} alt='logo' />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt='logo' />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt='logo' />
            )}
          </a>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          onClick={handleMobileDropdown}
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='icon-bar'>
            <i className='fas fa-bars'></i>
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' onClick={executeAboutScroll}>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' onClick={executeAimScroll}>
                Goal
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' onClick={executeBetaScroll}>
                Sign up
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' onClick={executeTeamScroll}>
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
