// pages/Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import calicocat from '../imgs/calico-cat-img.jpg';

const Home = () => {
  // const [posts, setPosts] = useState([]);
  
  // useEffect(() => {
  //   axios.get('https://localhost:4000/home')
  //     .then(res => {
  //       setPosts(res.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching posts:', error);
  //       setPosts([]);
  //     });
  // }, []);

  // const postList = posts.length ? (
  //   posts.map(post => (
  //     <div className="post card" key={post.id}>
  //       <div className="card-content">
  //         <Link to={`/posts/${post.id}`}>
  //           <span className="card-title">{post.title}</span>
  //         </Link>
  //         <p>{post.body}</p>
  //       </div>
  //     </div>
  //   ))
  // ) : (
  //   <div className="center">No posts to show</div>
  // );

  return (
    <div className='container-fluid'>
      <div className="post">
      <header>
      <div>
      <img className="img-fluid flex" src={calicocat} alt="A calico cat perched on a table." style={{}}/>
      </div>
      </header>
      <br />
        <h4 className="center justify-content-center">Welcome!</h4>
        {/* {postList} */}
        <div>
        
        </div>
        <br />
        <hr />
        <br />
        <div>
        <h5 className="display-6">Our Mission</h5>
          <p className="my-2 mx-4">At O & A Pet Destination, our mission is to create a haven where pet lovers can discover unparalleled joy in nurturing and caring for their beloved companions. With a steadfast commitment to excellence and compassion, we strive to be more than just a destination for pet supplies – we aspire to be a trusted partner on your journey of pet parenthood.</p>

<h6 className="fw-bolder" style={{fontSize:'large'}}>Adoption Services:</h6>

<p className="my-2 mx-4">We believe in the transformative power of adoption, both for pets and their human companions. Our adoption services provide a loving platform for connecting rescue animals with caring individuals and families. Through meticulous screening processes and personalized matchmaking, we facilitate lifelong bonds built on trust, love, and mutual respect.</p>

<h6 className="fw-bolder" style={{fontSize:'large'}}>Products for Pets:</h6>

<p className="my-2 mx-4">Our curated selection of products reflects our dedication to providing only the highest quality essentials and indulgences for pets of all shapes and sizes. From premium nutrition and grooming supplies to stylish accessories and enriching toys, every item in our inventory is carefully chosen to enhance the well-being and happiness of your furry, feathered, or scaly friend.</p>

<p className="my-2" style={{marginBottom:'5vh'}}>At O & A Pet Destination, we invite you to embark on a journey of discovery, companionship, and unconditional love. Together, let us celebrate the joy of pet ownership and nurture lasting relationships that enrich both our lives and the lives of our cherished animal companions.</p>

<hr />
<div class="container">
     <div class="row">
    {/*<div class=" col-6"> */}
      {/* <img src="cats.jpg" class="img-fluid border border-info" alt="basket of kittens"> */}
    {/* </div> */}
    {/* <div class="col-6">
      <h2 class="text-dark display-6 text-center">Discover Your Perfect Companion</h2>
      <p class="text-center">Whether you're seeking a loyal canine friend, a graceful feline companion, a colorful
        aquarium addition, or a chirpy feathered friend, Abigail's Pet Shop offers a diverse selection of pets to suit
        every lifestyle and preference.</p> */}
    {/* </div> */}
    <div class="col-6 float-left">
      <h2 class="text-dark display-6 text-center">Expertise You Can Trust</h2>
      <p class="text-center">With years of experience and a passion for animals, our knowledgeable staff is here to
        assist you every step of the way. From selecting the perfect pet to offering tips on training and grooming,
        we're committed to helping you build a strong and loving relationship with your furry, scaly, or feathered
        friend.</p>
    </div>
  <div class=" col-6">
      {/* <img src="" class="img-fluid border border-info" alt="two birds"/> */}
    </div>
    <div class="col-6">
      {/* <img src="dogs2.jpg" class="img-fluid border border-info" alt="two dogs in a field"> */}
    </div>
    <div class="col-6">
      <h2 class="text-dark display-6 text-center"> Community and Events </h2>
      <p class="text-center"> At Abigail's Pet Shop, we believe in fostering a sense of community among pet lovers. Stay
        updated on the latest pet-related news, events, and promotions by joining our online community and subscribing
        to our newsletter.</p>
    </div>
    <div class="col-6">
      <h2 class="text-dark display-6 text-center">Visit Us Today</h2>
      <p class="text-center">Ready to welcome a new member into your family? Come visit Abigail's Pet Shop today and let
        us help you find the perfect addition to your home. Your journey to pet parenthood starts here!</p>
    </div>
    <div class="col-6">
      {/* <img src="fish1.jpg" class="img-fluid border border-info" alt="fish"> */}
    </div>
    </div>
    </div>
  </div>
        </div>
      </div>
    
  );
};

export default Home;