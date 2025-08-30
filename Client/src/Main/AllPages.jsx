import React from "react";
import HeaderPage from '../Header/HeaderPage';
import LandingAuth from "../Auth/LandingAuth";
import BannerForMeditation from './BannerForMeditation';
import SliderComponent from './SliderComponent';
import Brands from './Brands';
import Testimonial from './Testimonial';
import ReadMore from './ReadMore';
import FAQ from './FAQ';
import Section_Benefits from './Section_Benefits';
import Footer from './Footer';

const AllPages = () => {
  return (
    <>
      <div>
        <HeaderPage />
        {/* <LandingAuth /> */}
        <BannerForMeditation />
        <SliderComponent />
        <Brands />
        <Testimonial />
        <ReadMore />
        <FAQ />
        <Section_Benefits />
        <Footer />
      </div>
    </>
  );
};

export default AllPages;
