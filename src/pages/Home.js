// pages/Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import calicocat from '../imgs/calico-cat-img.jpg';

const Home = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get('https://localhost:4000/home')
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
    <div className='container-fluid'>
      <div className="post">
      <header>
      <div>
      <img className="img-fluid flex" src={calicocat} alt="A calico cat perched on a table." style={{}}/>
      </div>
      </header>
      <br />
        <h4 className="center justify-content-center">Home</h4>
        {postList}
        <div>
        
        </div>
        <br />
        <hr />
        <br />
        <div>
          <h5>Our Mission</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam accusamus, reiciendis exercitationem, totam quisquam recusandae officia sapiente possimus id voluptatum quaerat quasi perspiciatis. Accusamus libero, nam est in recusandae commodi.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;