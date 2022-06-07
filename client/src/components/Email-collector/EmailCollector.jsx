import React, { useState } from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const EmailCollector = ({ style, lines }) => {
  const [email, setEmail] = useState('');

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const handleAddEmail = () => {
    if (validateEmail())
      axios
        .post('http://localhost:5000/api/add-email', { email: email })
        .then((response) => {
          if (response.status == 200) {
            toast.success('Email collected!');
            setEmail('');
          }
        });
    else toast.error('Invalid email!');
  };
  return (
    <section
      className={`services bords section-padding ${
        style === '4item' ? 'lficon' : lines ? '' : 'pt-0'
      }`}
      style={{ paddingBottom: '0px', paddingTop: '80px' }}
    >
      <Toaster />

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-md-10'>
            <div className='sec-head  text-center'>
              <h6 className='wow fadeIn' data-wow-delay='.5s'>
                Learn more
              </h6>
              <h3 className='wow color-font'>Ready to start your journey?</h3>
              <p style={{ paddingBottom: '0px', paddingTop: '70px' }}>
                Sign up below for exclusive beta access and in-app rewards.
              </p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='subscribe'>
            <input
              type='text'
              placeholder='Type Your Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span
              style={{ cursor: 'pointer' }}
              onClick={handleAddEmail}
              className='subs pe-7s-paper-plane'
            ></span>
          </div>
        </div>
      </div>
      {lines ? (
        <>
          <div className='line top left'></div>
          <div className='line bottom right'></div>
        </>
      ) : null}
    </section>
  );
};

export default EmailCollector;
