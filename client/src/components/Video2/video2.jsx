import React from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

const Video2 = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-lg-8 col-md-10'>
          <div className='sec-head  text-center'>
            <h6 className='wow fadeIn' data-wow-delay='.5s'>
              Our Goal
            </h6>
            <h3 className='wow color-font'>
              Let StoryForge help you find your story...
            </h3>
          </div>
        </div>
      </div>
      <section
        className='video bg-img parallaxie'
        style={{ backgroundImage: 'url(/img/video-poster.jpg)' }}
      >
        {typeof window !== 'undefined' && (
          <ModalVideo
            channel='vimeo'
            autoplay
            isOpen={isOpen}
            videoId='712428931'
            onClose={() => setOpen(false)}
          />
        )}
        <a
          className='vid valign'
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <div className='vid-butn'>
            <span className='icon'>
              <i className='pe-7s-play'></i>
            </span>
          </div>
        </a>
      </section>
    </>
  );
};

export default Video2;
