<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
=======
import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Welcome to O&A Pet Store</h1>
      <p>
        O&A Pet Store is your one-stop destination for all your pet needs. We
        pride ourselves on providing high-quality products and exceptional
        service to our customers and their beloved pets.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission at O&A Pet Store is to enrich the lives of pets and their
        owners by offering a wide selection of premium pet products and
        providing expert advice and support.
      </p>
      <h2>What Sets Us Apart</h2>
      <p>
        At O&A Pet Store, we understand that pets are family. That's why we
        carefully curate our inventory to ensure that we offer only the best
        products for your furry, feathered, or scaly friends. Whether you're
        shopping for nutritious pet food, stylish accessories, or essential
        grooming supplies, you can trust O&A Pet Store to have everything you
        need to keep your pet happy and healthy.
      </p>
      <h2>Our Commitment to Sustainability</h2>
      <p>
        We are committed to promoting sustainable practices and minimizing our
        environmental impact. That's why we offer eco-friendly products and
        strive to reduce waste in our operations wherever possible. By shopping
        at O&A Pet Store, you can feel good knowing that you're supporting a
        business that cares about the planet.
      </p>
      <h2>Get in Touch</h2>
      <p>
        Thank you for choosing O&A Pet Store for all your pet care needs. If you
        have any questions or feedback, please don't hesitate to{' '}
        <a href="/contact">contact us</a>. We're always happy to help!
      </p>
    </div>
  );
};

export default AboutUs;

>>>>>>> 20524742db2dc9c521fdc57aa97c3600fd06bb3c
