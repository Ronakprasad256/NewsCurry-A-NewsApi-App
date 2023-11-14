import React, { Component } from 'react';

export class NewsItem extends Component {

    const 

    render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
    <div className='container-fluid my-4'>
      <div className="card">
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body bg-dark text-light">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-info">
            Read more
            </a>
        </div>
      </div>
      </div>
        );
    }
}

export default NewsItem;
