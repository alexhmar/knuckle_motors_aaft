import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="Slider">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img src="sliderImages/livewireA.jpg" alt="1" />
        </div>
        <div className="image">
          <img src="sliderImages/livewireB.jpg" alt="2" />
        </div>
        <div className="image">
          <img src="sliderImages/livewireC.jpg" alt="3" />
        </div>
        <div className="image">
          <img src="sliderImages/livewireD.jpg" alt="4" />
        </div>
        <div className="image">
          <img src="sliderImages/livewireE.jpg" alt="5" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
