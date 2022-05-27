import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/navbar';
import Intro2 from '../components/Intro2/intro2';
import Services from '../components/Services/services';
import Video2 from '../components/Video2/video2';
import CallToAction from '../components/Call-to-action/call-to-action';
import Footer from '../components/Footer/footer';
import LightTheme from '../layouts/Light';
import Portfolio from '../components/Portfolio/portfolio';
import FullTestimonials from '../components/Full-testimonials/full-testimonials';
import Team2 from '../components/Team2/team2';
import Blogs2 from '../components/blogs/Blogs2/blogs2';
import IntroWithSlider from '../components/Intro-with-slider/intro-with-slider';
import EmailCollector from '../components/Email-collector/EmailCollector';

const Homepage2 = () => {
  const aboutRef = useRef(null);
  const aimRef = useRef(null);
  const betaRef = useRef(null);

  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    // axios
    //   .get('http://localhost:5000/api/test')
    //   .then((response) => console.log(response.data));
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
      } else {
        navbar.classList.remove('nav-scroll');
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar
        nr={navbarRef}
        lr={logoRef}
        theme='themeL'
        aboutRef={aboutRef}
        aimRef={aimRef}
        betaRef={betaRef}
      />
      <Intro2 />
      <div ref={aboutRef}>
        <Services style='4item' />
      </div>
      <div ref={aimRef}>
        <Video2 />
      </div>
      {/* <Portfolio grid={3} filterPosition='center' /> */}
      {/* <FullTestimonials noPadding /> */}
      <div ref={betaRef}>
        <EmailCollector style='4item' />
      </div>
      <Team2 />
      {/* <Blogs2 /> */}
      {/* <CallToAction /> */}
      <Footer />
    </LightTheme>
  );
};

export default Homepage2;
