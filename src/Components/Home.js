import React from "react";

const Home = () => {
  return (
    <div id="home">
      <img src="images/hdmomoa.png" alt="hdmomoa" />
      <div className="Text">
        <h2>The Spirit of Adventure</h2>
        <p className="infoText" id="hometext1">
          For those who live on the road
        </p>
        <img src="images/riders.jpg" alt="riders" />
        <h3>Knucklehead Motors</h3>
        <p className="infoText" id="hometext2">
          A boutique motorcycle dealership
        </p>
        <p className="infoText" id="hometext3">
          Helping riders seek adventure since 1952
        </p>
      </div>
      <footer>
        <div id="footer-links">
          <a href="https://www.instagram.com/harleydavidson/" target="-blank">
            <img src="images/instagram.svg" alt="instagram" />
          </a>
          <a
            href="https://twitter.com/harleydavidson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
            rel="noreferrer"
          >
            <img src="images/twitter.svg" alt="twitter" />
          </a>
          <a
            href="https://www.youtube.com/c/harleydavidson"
            target="_blank"
            rel="noreferrer"
          >
            <img src="images/youtube.svg" alt="youtube" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
