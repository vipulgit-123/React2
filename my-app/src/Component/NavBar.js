import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand fw-bold fs-3" href="/"><h1>NewsMonkey</h1></a>

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
                    <a className="nav-link fw-semibold px-3"  href="/">Health</a>
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
            </div>
          </nav>
        </div>
    )
  }
}
