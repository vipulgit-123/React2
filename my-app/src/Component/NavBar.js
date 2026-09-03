import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand news-logo" to="/">
              <h2>
                📰 <span className="logo-news">News</span>
                <span className="logo-monkey">Monkey</span>
              </h2>
            </Link>

            {/*  <button className="navbar-toggler"*/}
            {/*        type="button"*/}
            {/*        data-bs-toggle="collapse"*/}
            {/*        data-bs-target="#navbarSupportedContent"*/}
            {/*        aria-controls="navbarSupportedContent"*/}
            {/*        aria-expanded="false"*/}
            {/*        aria-label="Toggle navigation">*/}

            {/*  <span className="navbar-toggler-icon"></span>*/}
            {/*</button>*/}

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/*<ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-1">*/}
              <ul className="navbar-nav ms-auto gap-lg-2">
                <li className="nav-item">
                  <Link
                    className="nav-link active fw-semibold px-3"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold px-3"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3" to="/technology">
                    Technology
                  </Link>
                </li>
                {/*<li className="nav-item">*/}
                {/*    <Link className="nav-link fw-semibold px-3" to="/about">About</Link >*/}
                {/*</li>*/}
              </ul>
            </div>
            <form className="d-flex px-3" role="search">
              <input
                className="form-control me-2 px-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light px-3" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
