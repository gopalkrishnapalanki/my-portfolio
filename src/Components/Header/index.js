import React from "react";
import Cookie from "js-cookie";
import { Link, withRouter } from "react-router-dom";
import "./index.css";

const Header = (props) => {
  const onClickLogout = () => {
    Cookie.remove("jwt_token");
    const { history } = props;
    history.replace("/login");
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light navbar-color">
      <div className="container-fluid">
        <Link to='/'>
        <a className="navbar-brand" href="#">
          <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1648550731/2_ydoaok.png" />
          </a>
          </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item  align-items-last">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
               About
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/contact" className="nav-link">
               Contact
              </Link>
            </li> */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end ps-3">
              <button
                type="button"
                className="btn btn-primary "
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </ul>
        </div>
      </div>
      </nav>
      </>
  );
};
export default withRouter(Header);
