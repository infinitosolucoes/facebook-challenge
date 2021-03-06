import React from 'react';

import './style.css';

function Comment({ data }) {
  return (
    <div className="bg-comment">
      <div className="inside-comment">
        <img src={data.author.avatar} className="avatar-comment" />
        <div className="comment-box">
          <span className="author">{data.author.name}</span>
          <span className="comment">{data.content}</span>
        </div>
      </div>
    </div>
  )
}

export default Comment;