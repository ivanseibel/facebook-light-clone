import React, { Component } from 'react';
import 'json-loader';

import './styles.css';
import Post from '../Post';
import Posts from '../../posts.json';

class PostList extends Component {
  state = Posts;

  render() {
    return (
      <div className="main-postlist-container">
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <Post data={post} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;