import React from 'react';

import './styles.css';
import avatar from '../../assets/1.jpeg';

export default function Comment({ data: comment }) {
  return (
    <div className="comment-container">
      <img src={comment.author.avatar} alt="avatar" />
      <p><strong>{comment.author.name}</strong>{comment.content}</p>
    </div>
  );
}