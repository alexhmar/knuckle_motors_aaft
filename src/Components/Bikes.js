import React from "react";

const Bikes = () => {
  return (
    <div id="bikes">
      <div className="Container">
        <img src="images/Brando.jpg" alt="brando" />
        <a href="/retro">
          <h4 id="retro">Retro</h4>
        </a>
      </div>
      <div className="Container">
        <img src="images/ktm_superduke.jpg" alt="superduke" />
        <a href="/naked">
          <h4 id="naked">Naked</h4>
        </a>
      </div>
      <div className="Container">
        <img src="images/pan_america.jpg" alt="pan_america" />
        <a href="/adventure">
          <h4 id="adventure">Adventure</h4>
        </a>
      </div>
      <div className="Container">
        <img src="images/livewire.jpg" alt="livewire" />
        <a href="/future">
          <h4 id="future">The Future</h4>
        </a>
      </div>
    </div>
  );
};

export default Bikes;
