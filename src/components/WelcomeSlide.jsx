import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import './header.css' 
import SquareBox from './SquareBox';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import cloudImage from './Cloud.png'
import androidImage from './ANDROID.png'
import webdev from './webdev.png'
import video from './background.mp4'
import android from './android.mp4'
import AnHead from './ANDROID DEVELOPMENT.png'
import web from './webdev1.mp4'

function WelcomeSlide() {
  const squareBoxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (squareBoxRef.current) {
      observer.observe(squareBoxRef.current);
    }

    return () => {
      if (squareBoxRef.current) {
        observer.unobserve(squareBoxRef.current);
      }
    };
  }, []);
  
  return (
  <div>
    <Parallax pages={6} style={ {overflow: 'visible'} }>
      
      <ParallaxLayer speed={1}>
      <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </ParallaxLayer>

      <ParallaxLayer offset={1.25} speed={0}>
        <div className='mid'>
          <h2>MindMap</h2>
        <source src={AnHead} />
        </div>
      </ParallaxLayer>
      

      <ParallaxLayer offset={1} speed={0.5} className="parallax-layer-1" z-tabIndex={1}>
        <video autoPlay muted loop className="video-background">
          <source src={video} type="video/mp4" />
           Your browser does not support the video tag.
        </video>
        <div className="row">
          <div className="square-box">
            <SquareBox domain="Cloud Computing" imageSrc={cloudImage} />
          </div>
            <div className="description">
              <h3>Cloud Computing</h3>
              <p>
                Cloud Computing: Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
                Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
                cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
              </p>
            </div>
          </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.5} className='.parallax-layer-2'>
      <video autoPlay muted loop className="video-background">
          <source src={android} type="video/mp4" />
           Your browser does not support the video tag.
        </video>
        <div className="row">
          <div className="adescription">
            <h3>Android Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              tellus, vel finibus risus augue ac diam. Quisque vitae urna auctor,<br />
              fermentum justo eget, elementum odio.
            </p>
          </div>
          <div className="square-box-right">
            <SquareBox domain="Android Development" imageSrc={androidImage} animation="wiggle" />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.5} className="parallax-layer-1" z-tabIndex={3}>
        <video autoPlay muted loop className="video-background">
          <source src={web} type="video/mp4" />
           Your browser does not support the video tag.
        </video>
        <div className="row">
          <div className="square-box">
            <SquareBox domain="Web Development" imageSrc={webdev} />
          </div>
            <div className="description">
              <h3>Web Development</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus nec est nec urna lacinia interdum vel ut libero. 
              Sed bibendum justo a sem varius, sit amet aliquet metus viverra. 
              </p>
            </div>
          </div>
      </ParallaxLayer>


      <footer
        className="bg-dark text-light text-center py-3"
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          background: '#fffff', // Change the background color as needed
        }}
      >
        <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              Company |
              About |
              Careers |
              Affiliates |
              {/* ... Add other links */}
            </p>
            <p>
              Languages |
              Bash |
              C |
              C++ |
              {/* ... Add other language links */}
            </p>
            <p>Made with ❤️ CodeOdyssey</p>
          </div>
        </div>
        </div>
      </footer>
    </Parallax>
    </div>
  )
}

export default WelcomeSlide;
