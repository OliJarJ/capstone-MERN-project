// pages/AboutUs

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get('https://localhost:4000/AboutUs')
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setPosts([]);
      });
  }, []);

  const postList = posts.length ? (
    posts.map(post => (
      <div className="post card" key={post.id}>
        <div className="card-content">
          <Link to={`/posts/${post.id}`}>
            <span className="card-title">{post.title}</span>
          </Link>
          <p>{post.body}</p>
        </div>
      </div>
    ))
  ) : (
    <div className="center">No posts to show</div>
  );

  return (
    <div className='container'>
      <div className="post">
        <h4 className="center">About Us</h4>
        {postList}
      </div>
    </div>
  );
};

export default AboutUs;
