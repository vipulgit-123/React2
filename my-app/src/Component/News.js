import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    console.log("Hello i am a constructor from NewsComponent");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: props.pageSize,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff0eb82f79a94cd7bbd165f7ec2d761a&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
        console.log(data);
    console.log(parsedData);
      this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    console.log("cdm");
    await this.updateNews();
  }

  fetchMoreData = async () => {

    const nextPage = this.state.page + 1;

    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff0eb82f79a94cd7bbd165f7ec2d761a&page=${nextPage}&pageSize=${this.state.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(data);

    console.log("Fetching page:", nextPage);

    console.log(parsedData);
      this.setState({
        page: nextPage,
      articles: this.state.articles.concat(parsedData.articles || []),
      totalResults: parsedData.totalResults || 0,
      loading: false,
    });
  };

  render() {
    console.log("render");
    return (
      <div className="container my-3 mt-3 mb-3">
        <div className="headline-bar">
          <span className="headline-label">
            <h2>Breaking News</h2>
          </span>
          <div className="headline-wrapper">
            <span className="headline-text">
              <h3 className="text-center">
                {" "}
                Latest News : Stay updated with Today's Top{" "}
                {this.capitalizeFirstLetter(this.props.category)} Headlines{" "}
              </h3>
            </span>
          </div>
        </div>
        {/*{this.state.loading && <Spinner />}*/}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          // loader={<h4>Loading...</h4>}
          loader={<Spinner />}
        >
          <div className="container">
              <div className="row">
            {this.state.articles.map((element,index) => {
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
  }
}
