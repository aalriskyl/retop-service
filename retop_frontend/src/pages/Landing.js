import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import Service from '../components/Service';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Landing = () => {
  const heroRef = useRef(null);
  const serviceRef = useRef(null);
  const reviewsRef = useRef(null);
  const galleryRef = useRef(null);
  const blogRef = useRef(null);

  return (
    <div>
      <Navbar 
        heroRef={heroRef}
        serviceRef={serviceRef}
        reviewsRef={reviewsRef}
        galleryRef={galleryRef}
        blogRef={blogRef}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>
      <div ref={galleryRef}>
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
