import React from 'react';

import './global.css';
import Header from './components/Header';
import PostList from './components/PostList';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <PostList />
    </div>
  );
}