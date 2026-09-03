import React, { Component } from 'react'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {

    constructor() {
        super();
        console.log("Hello i am a constructor from NewsComponent")
        this.state = {
            articles: [],
            loading: false,
            page:1,
            pageSize: 10,
            totalResults: 0
        }
    }

    async componentDidMount() {
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff0eb82f79a94cd7bbd165f7ec2d761a&page=${this.state.page}&pageSize=${this.state.pageSize}`
        this.setState({loading: true} )
        let data = await fetch(url)
        let parshedData = await data.json()
        console.log(parshedData)
        this.setState(
            {
                articles: parshedData.articles || [],
                totalResults:parshedData.totalResults,
                loading:false
            })
    }

    handleNext = async ()=>{
        console.log("Next")
       let nextPage = this.state.page + 1;
        if (nextPage > Math.ceil(this.state.totalResults/this.state.pageSize)){
            return
        }else {
            let url =
             `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff0eb82f79a94cd7bbd165f7ec2d761a&page=${nextPage}&pageSize=${this.state.pageSize}`;
              this.setState({loading: true});
            let data = await fetch(url)
        let parshedData = await data.json()
        console.log(parshedData)

        this.setState(
            {
                 page:  nextPage,
                articles: parshedData.articles || [],
                totalResults: parshedData.totalResults,
                loading: false
            }
        )
        }
    }

   handlePrev = async ()=>{
        console.log("Previous")
      let prevPage = this.state.page - 1;
        if (prevPage < 1) {
    return;
}else{
           let url =
             `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff0eb82f79a94cd7bbd165f7ec2d761a&page=${prevPage}&pageSize=${this.state.pageSize}`;
            this.setState({loading: true});
           let data = await fetch(url)
        let parshedData = await data.json()
        console.log(parshedData)
       console.log("Articles received:", parshedData.articles?.length ||0 );
        console.log(parshedData.articles);

        this.setState(
            {
                page: prevPage,
               articles: parshedData.articles || [],
                loading:false
            }
        )
        }
    }

    render() {
        console.log("render")
    return (
      <div className="container my-3">
          <h2>Today Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <div className="row">
               {!this.state.loading && this.state.articles.map((element)=>{
                   return <div className="col-md-3 my-2" key={element.url}>
              <NewsItem title={(element.title || "").split(" ").slice(0, 5).join(" ")}
                        description={element.description? element.description.split(" ").slice(0, 15).join(" "):element.title}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
              />
          </div>

          })}
          </div>
          <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1}
                      type="button" className="btn btn-light"
                      onClick={this.handlePrev}>
                            <strong>&larr; Previous</strong>
              </button>
              <button  disabled={this.state.page >= Math.ceil(this.state.totalResults / this.state.pageSize)}
                       type="button" className="btn btn-light"
                       onClick={this.handleNext}>
                            <strong>Next &rarr;</strong>
              </button>
          </div>
      </div>
    )
    }
}
