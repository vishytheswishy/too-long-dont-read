import "../App.css";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="tldr" lang="en-US">
      <header>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/umd/react.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.0.0/umd/react-dom.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/15.2.0/react-dom.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.25/browser-polyfill.min.js"></script>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </header>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <b>
              too long;<br></br>didn't read
            </b>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">|</a>
            <a href="/tldrit" className="navbar-item is-small">
              <p className="slogan">
                {" "}
                shortening your time <br></br>
                to read.
              </p>
            </a>
          </div>

          <div className="navbar-end is-right">
            <div className="navbar-item is-right has-dropdown is-arrowless is-hoverable is-dark">
              <a className="navbar-link is-arrowless">
                <div>
                  <div className="br">
                    <b>...</b>
                  </div>
                  <div className="br">
                    <b>...</b>
                  </div>
                  <div className="br">
                    <b>...</b>
                  </div>
                </div>
              </a>

              <div className="navbar-dropdown is-dark is-right is-arrowless">
                <a href="/" className="navbar-item is-dark">
                  home
                </a>
                {/* <a href="/tldrit" className="navbar-item">
                  tldr it!
                </a> */}
                <a href="/preview" className="navbar-item">
                  preview
                </a>
                <a href="/today" className="navbar-item">
                  daily market analysis
                </a>
                {/* <a href="/blogs" className="navbar-item">
                  blogs
                </a> */}
                <a href="/about-us" className="navbar-item">
                  about us
                </a>
                {/* <hr className="navbar-divider"></hr> */}
                {/* <a href="/issues" className="navbar-item">report an issue</a> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
