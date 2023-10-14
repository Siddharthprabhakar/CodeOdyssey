import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
// import './home.css' 
import cloudImage from '../images/Cloud.png'
import androidImage from '../images/ANDROID.png'
import webdev from '../images/webdev.png'
import unvideo from '../images/Untitled.mp4'
import { Link, useLocation } from 'react-router-dom';

function MobileWelcomeSlide() {
  return (
    <>
    <div className="background-video" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
      }}>
        <video autoPlay muted loop className="video-bg" style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}>
          <source src={unvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    <Carousel className='carouselbody'>
    <Carousel.Item>
      <ExampleCarouselImage text="First slide" />
      <Carousel.Caption>
  <h3>About Website</h3>
  <p>The website offers roadmaps to help students learn the skills they need and build the experience they need to succeed in their careers. It also offers a variety of resources to help students follow their roadmap, including learning resources and project ideas.</p>
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

      <div className="box-container">
        {/* Cloud Computing Box */}
        <div className="box">
          <Link to='/cloud'><img src={cloudImage} alt="Cloud" /></Link>
          <h3>Cloud Computing</h3>
          <p>
            Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
            Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
            cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
          </p>
        </div>

        {/* Android Development Box */}
        <div className="box">
          <Link to='/android'><img src={androidImage} alt="Android Development" /></Link>
          <h3>Android Development</h3>
          <p>
            Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
            Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
            cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
          </p>
        </div>

        {/* Web Development Box */}
        <div className="box">
          <Link to='/webdev'><img src={webdev} alt="Web Development" /></Link>
          <h3>Web Development</h3>
          <p>
            Unleash Limitless Potential! Cloud computing revolutionizes digital life. 
            Access files anywhere, collaborate seamlessly, and enjoy infinite storage. It's secure, 
            cost-effective magic that turns the ordinary into extraordinary, making the impossible your new reality!
          </p>
        </div>
      </div>
      </>
  )
}

export default MobileWelcomeSlide

