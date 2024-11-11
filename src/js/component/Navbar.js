import React from "react";



  const Navbar = () => {

      return (
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-bg-dark" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-1" id="navbarText">
              <ul className="navbar-nav ms-auto text-bg-dark">
                <li className="nav-item">
                  <a className="nav-link active text-bg-dark" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-bg-dark" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-bg-dark" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-bg-dark" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }


export default Navbar