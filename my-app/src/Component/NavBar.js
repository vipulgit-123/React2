import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
              <div className="container-fluid">
                  <a className="navbar-brand news-logo" href="/">
                      <h2>📰 <span className="logo-news">News</span><span className="logo-monkey">Monkey</span></h2>
                  </a>


                  {/*  <button className="navbar-toggler"*/}
                  {/*        type="button"*/}
                  {/*        data-bs-toggle="collapse"*/}
                  {/*        data-bs-target="#navbarSupportedContent"*/}
                  {/*        aria-controls="navbarSupportedContent"*/}
                  {/*        aria-expanded="false"*/}
                  {/*        aria-label="Toggle navigation">*/}

                  {/*  <span className="navbar-toggler-icon"></span>*/}
                  {/*</button>*/}

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      {/*<ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-1">*/}
                      <ul className="navbar-nav ms-auto gap-lg-2">
                          <li className="nav-item">
                              <a className="nav-link active fw-semibold px-3" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link fw-semibold px-3" href="/">Business</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link fw-semibold px-3" href="/">Entertainment</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link fw-semibold px-3" href="/">General</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link fw-semibold px-3" href="/">Health</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link fw-semibold px-3" href="/">Science</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link fw-semibold px-3" href="/">Sports</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link fw-semibold px-3" href="/">Technology</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link fw-semibold px-3" href="/">About</a>
                          </li>
                      </ul>
                  </div>
                    <form className="d-flex px-3" role="search">
                      <input className="form-control me-2 px-3" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-light px-3" type="submit">Search</button>
                  </form>
              </div>
          </nav>
        </div>
    )
  }
}
