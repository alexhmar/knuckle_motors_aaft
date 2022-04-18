import { useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="Container-fluid" id="navbar">
      <header id="header">
        <div id="header-container">
          <a id="header-link" href="/">
            <img
              src="images/logo.svg"
              alt="logo"
              width="150px"
              height="100px"
            />
          </a>

          <h1>Knucklehead Motors</h1>
        </div>
        <nav className={isMobile ? "nav-text-mobile" : "nav-text"}>
          <ul>
            <li>
              <a className="nav-a" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="nav-a" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-a" href="/bikes">
                Bikes
              </a>
            </li>
          </ul>
        </nav>
        <img
          src="images/arrow.svg"
          alt="arrow"
          width="70px"
          height="70px"
          onClick={() => setIsMobile(!isMobile)}
        />
      </header>
    </div>
  );
};

export default Header;
// <a href='https://dryicons.com/free-icons/arrow-icons'> Icon by Dryicons </a>
