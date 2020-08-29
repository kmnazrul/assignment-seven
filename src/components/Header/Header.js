import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-uppercase fixed-top">
        <a className="navbar-brand text-white" href="#">
          NI ACADEMY
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav m-auto">
            <a className="nav-link active text-white " href="/courses">
              Courses <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link  text-white text-uppercase" href="/aboutUs">
              About us
            </a>
            <a
              className="nav-link  text-white text-uppercase"
              href="/contactUs"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>
      <br /> <br />
      <br />
      <br />
      <div className="text-center">
        <h2>Welcome to NI ACADEMY</h2>
        <h4>Here are our online courses</h4>
      </div>
    </div>
  );
};

export default Header;
