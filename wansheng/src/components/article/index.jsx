import React from 'react';
const Article = ({ imgBefore, imgAfter, date, text }) => {
  return (
    <div className="ws_cases-container_article">
      <div className="ws_cases-container_article-image">
        <img src={imgBefore} className="image-before" />
        <img src={imgAfter} className="image-after" />
      </div>
      <div className="ws_cases-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>hover to see before construction</p>
      </div>
    </div>
  )
}

export default Article