import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author,  date, source } = this.props;

    const fallbackImage =
      "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5196x2923+0+271/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F77%2Fff%2Fbe265ef44cd6ba4ba4c48eaeafc4%2Fgettyimages-2284059159.jpg";

    return (
      <div>
        <div className="card position-relative" style={{ width: "18rem" }}>

          {/*<img src={!imageUrl?"https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5196x2923+0+271/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F77%2Fff%2Fbe265ef44cd6ba4ba4c48eaeafc4%2Fgettyimages-2284059159.jpg"*/}
          {/*    : imageUrl} className="card-img-top" alt="..." />*/}
          <img
            src={imageUrl || fallbackImage}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
            className="card-img-top news-image"
            alt={title || "News"}
          />
           <span className="badge rounded-pill bg-danger text-dark source-badge">
              {source}
            </span>
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small>
            </p>
            <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark"
            >
              Read More
            </a>
        </div>
      </div>
    );
  }
}
