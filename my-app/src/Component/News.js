import React, { Component } from 'react'
import NewsItem from "./NewsItem";

export default class News extends Component {

    constructor() {
        super();
        console.log("Hello i am a constructor from NewsComponent")
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount() {
        console.log("cdm")
        let url =  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff0eb82f79a94cd7bbd165f7ec2d761a&page=1&&pagesize=10";
        let data = await fetch(url)
        let parshedData = await data.json()
        console.log(parshedData)
        this.setState({articles: parshedData.articles})
    }

    handleNext = async ()=>{
        console.log("Next")

         let url =
             `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff0eb82f79a94cd7bbd165f7ec2d761a&page=${this.state.page + 1}&pagesize=10`;
        let data = await fetch(url)
        let parshedData = await data.json()
        console.log(parshedData)

        this.setState(
            {
                page:  this.state.page + 1,
                articles: parshedData.articles
            }
        )
    }

   handlePrev = async ()=>{
        console.log("Previous")
         let url =
             `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff0eb82f79a94cd7bbd165f7ec2d761a&page=${this.state.page - 1}&pagesize=10`;
        let data = await fetch(url)
        let parshedData = await data.json()
        console.log(parshedData)

        this.setState(
            {
                page:  this.state.page - 1,
                articles: parshedData.articles
            }
        )

    }

    render() {
        console.log("render")
    return (
      <div className="container my-3">
          <h2>Today Top Headlines</h2>
          <div className="row">
               {this.state.articles.map((element)=>{
                   return <div className="col-md-3 my-2" key={element.url}>
              <NewsItem title={(element.title || "").split(" ").slice(0, 5).join(" ")}
                        description={(element.title || "").split(" ").slice(0, 15).join(" ")}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
              />
          </div>

          })}
          </div>
          <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-light" onClick={this.handlePrev}>&larr; Previous</button>
              <button type="button" className="btn btn-light" onClick={this.handleNext}>Next &rarr;</button>
          </div>
      </div>
    )
    }
}
