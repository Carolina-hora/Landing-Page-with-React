import React from "react";

export const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-dark">
        <div className="col-sm-9 col-md-9 col-lg-9 mx-auto">
          <nav className="navbar navbar-expand-lg bg-dark ">
            <a className="navbar-brand text-white" href="#">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="#">
                    Contact
                  </a>
                </li>
              </ul>
           
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
