import React from 'react';

import './styles.css';
import Comment from '../Comment';

export default function Post({ data: post }) {
  return (
    <div className="post-container">
      <div className="post-header">

        <img src={post.author.avatar} alt="avatar" />

        <div className="post-profile">
          <span>{post.author.name}</span>
          <small>{post.date}</small>
        </div>

      </div>

      <p>{post.content}</p>

      <hr />

      <ul>
        {post.comments.map(comment => (
          <li key={comment.id}>
            <Comment data={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}