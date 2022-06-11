/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Team2 = () => {
  return (
    <section className='team section-padding'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-md-10'>
            <div className='sec-head text-center'>
              <h6 className='wow fadeIn' data-wow-delay='.5s'>
                Who are we?
              </h6>
              <h3 className='wow color-font'>Meet the team</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-lg-3 col-md-6'>
            <div className='item cir md-mb50'>
              <div className='img'>
                <img src='/img/sabrina.jpg' alt='' />
                <div id='circle1'>
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='300px'
                    height='300px'
                    viewBox='0 0 300 300'
                    enableBackground='new 0 0 300 300'
                    xmlSpace='preserve'
                  >
                    <defs>
                      <path
                        id='circlePath1'
                        d=' M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
                      />
                    </defs>
                    <circle cx='150' cy='100' r='75' fill='none' />
                    <g>
                      <use xlinkHref='#circlePath1' fill='none' />
                      <text fill='#fff'>
                        <textPath xlinkHref='#circlePath1'>
                          CEO . CEO . CEO . CEO . CEO . CEO .
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className='info'>
                  <h6 style={{ color: '#ffc15e' }}>Sabrina Rucker</h6>
                  <span
                    style={{
                      color: '#ffffff',
                      textAlign: 'justify',
                      marginRight: '10px',
                    }}
                  >
                    CEO Sabrina Rucker is a marathoner and student at the
                    University of Minnesota. She speaks six languages and has
                    self-published three children’s books. Her background is in
                    cybersecurity, history, and product design. Sabrina is
                    working to publish her first graphic novel.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='item cir md-mb50'>
              <div className='img'>
                <img src='/img/derek.jpg' alt='' />
                <div id='circle2'>
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='300px'
                    height='300px'
                    viewBox='0 0 300 300'
                    enableBackground='new 0 0 300 300'
                    xmlSpace='preserve'
                  >
                    <defs>
                      <path
                        id='circlePath2'
                        d=' M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
                      />
                    </defs>
                    <circle cx='150' cy='100' r='75' fill='none' />
                    <g>
                      <use xlinkHref='#circlePath2' fill='none' />
                      <text fill='#fff'>
                        <textPath xlinkHref='#circlePath2'>
                          CTO . CTO . CTO . CTO . CTO . CTO .
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className='info'>
                  <h6 style={{ color: '#ffc15e' }}>Derek Rucker</h6>
                  <span
                    style={{
                      color: '#ffffff',
                      textAlign: 'justify',
                      marginRight: '10px',
                    }}
                  >
                    CTO Derek Rucker is a serial entrepreneur, data scientist,
                    and avid reader. His startup Carrot Health was the 2018
                    winner of the MN Cup Life Science/Health IT division, and
                    was recently acquired. He's been writing a great new high
                    fantasy novel for over 30 years now, and it's not nearly
                    done.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team2;
