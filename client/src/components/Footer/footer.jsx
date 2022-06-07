/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-4'>
            <div className='item md-mb50'>
              <div className='title'>
                <h3>Contact</h3>
              </div>
              <ul>
                <li
                  style={{
                    marginTop: '40px',
                  }}
                >
                  <span className='icon pe-7s-mail'></span>
                  <div className='cont'>
                    <h6
                      style={{
                        fontWeight: '300',
                        fontSize: '15px',
                        textTransform: 'uppercase',
                        letterSpacing: '7px',
                      }}
                    >
                      Email Us
                    </h6>
                    <p>info@storyforge.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='item'>
              <div className='logo'>
                <img src={appData.lightLogo} alt='' />
              </div>
              <div className='social'>
                <a href='#0'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href='#0'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='#0'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='#0'>
                  <i className='fab fa-youtube'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='copy-right'>
            <p>© 2022, StoryForge.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
