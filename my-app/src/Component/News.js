import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);

    let data = await fetch(url);

    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(50);

    console.log(data);
    console.log(parsedData);
    props.setProgress(70);

    setArticles(parsedData.articles || []);
    setLoading(false);
    setTotalResults(parsedData.totalResults);

    props.setProgress(100);
  };

  useEffect(() => {
     document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();

  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    const nextPage = page + 1;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);

    console.log("Fetching page:", nextPage);

    if (parsedData.status !== "ok") {
      console.error("NewsAPI Error:", parsedData.message);
      return;
    }

    setArticles(articles.concat(parsedData.articles || []));
    setTotalResults(parsedData.totalResults || 0);
  };

  return (
    <div className="container my-3 mt-3 mb-3 main-content">
      <div className="headline-bar">
        <span className="headline-label">
          <h2>Breaking News</h2>
        </span>
        <div className="headline-wrapper">
          <span className="headline-text">
            <h3 className="text-center">
              {" "}
              Latest News : Stay updated with Today's Top{" "}
              {capitalizeFirstLetter(props.category)} Headlines{" "}
            </h3>
          </span>
        </div>
      </div>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-3 my-2" key={`${element.url}-${index}`}>
                  <NewsItem
                    title={(element.title || "")
                      .split(" ")
                      .slice(0, 5)
                      .join(" ")}
                    description={
                      element.description
                        ? element.description.split(" ").slice(0, 15).join(" ")
                        : element.title
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source?.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;
