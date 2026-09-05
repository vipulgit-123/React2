import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // apiKey = "ff0eb82f79a94cd7bbd165f7ec2d761a"
  console.log("API KEY:", process.env.REACT_APP_NEWS_API);
  console.log("apiKey:", apiKey);

  const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <NavBar onSearch={handleSearch} />
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <News
                searchQuery={searchQuery}
                setProgress={setProgress}
                apiKey={apiKey}
                key="home"
                pageSize={pageSize}
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
                searchQuery={searchQuery}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
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
                searchQuery={searchQuery}
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
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
                searchQuery={searchQuery}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
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
                searchQuery={searchQuery}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
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
                searchQuery={searchQuery}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
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
                searchQuery={searchQuery}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
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
                searchQuery={searchQuery}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
