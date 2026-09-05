import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 10;
  apiKey = process.env.REACT_APP_NEWS_API;
  // apiKey = "ff0eb82f79a94cd7bbd165f7ec2d761a"

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  constructor(props) {
    super(props);
    console.log("API KEY:", process.env.REACT_APP_NEWS_API);
    console.log("this.apiKey:", this.apiKey);
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <NavBar />
          <Routes>
            <Route
              exact
              path="/home"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="home"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />
          </Routes>
        </Router>
        {/*<News setProgress = {this.setProgress} pageSize={this.pageSize} country="us" category="science" />*/}
      </div>
    );
  }
}
