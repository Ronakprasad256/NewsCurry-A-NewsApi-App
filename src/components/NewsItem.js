import React from 'react';

const NewsItem =(props) =>{

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="container my-4">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body bg-dark text-light">
              <div>
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger text-light" style={{left: "84%"}}>
                {source}
              </span>
              </div>
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-info">
                By {!author ? 'Unknown' : author} on{' '}
                {new Date(date).toGMTString()}{' '}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-success">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
