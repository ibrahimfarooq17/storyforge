/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className='slider-st valign position-re'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 valign'>
            <div className='cont md-mb50'>
              <div className='sub-title mb-5'>
                <h6>Publishing</h6>
              </div>
              <h1
                style={{
                  color: '#ffc15e',
                }}
                className='mb-10 fw-600'
              >
                Everyone has a story to tell.
              </h1>
              <p
                style={{
                  color: '#ca634e',
                }}
              >
                But not everyone knows where to start. We can help. StoryForge
                gives writers the community, safety, and structure they need to
                forge their stories.
              </p>
              {/* <Link href={`/about/about-dark`}>
                <a className='butn bord curve mt-30'>
                  <span>About Us</span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='img'>
              <img src='/img/home-screen.jpeg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro2;
