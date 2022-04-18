import React from "react";
import Slider from "./Slider.js";
const Future = () => {
  return (
    <div id="Future">
      <h4>LIVEWIRE</h4>
      <div id="livewire">
        <img src="images/livewire2.jpg" alt="livewire2" />
      </div>
      <p className="info">
        The first electronic motorcycle from Harley Davidson
      </p>
      <div id="vid">
        <iframe
          id="vid"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/kr8w1VVYWMw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Slider />
    </div>
  );
};

export default Future;
