// pages/Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import calicocat from '../imgs/calico-cat-img.jpg';
import dogocean from '../imgs/dog-and-ocean.jpg';
import dogwithcouple from '../imgs/dog-with-couple.jpg';
import kitten from '../imgs/cat-being-pet.jpg'

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
     
        <div>
        
        </div>
        <br />
        <br />
        <div>
        <h5 className="display-6 text-center text-secondary" style={{marginBottom:'1rem'}}>Our Mission</h5>
          <p style={{marginLeft:'4vh', marginLeft:'4vh', marginBottom:'2rem'}}>At O & A Pet Destination, our mission is to create a haven where pet lovers can discover unparalleled joy in nurturing and caring for their beloved companions. With a steadfast commitment to excellence and compassion, we strive to be more than just a destination for pet supplies – we aspire to be a trusted partner on your journey of pet parenthood.</p>

<h6 className="fw-bolder text-center" style={{fontSize:'large'}}>Adoption Services:</h6>

<p className="my-2 py-2" style={{marginLeft:'4vh', marginLeft:'4vh'}}>We believe in the transformative power of adoption, both for pets and their human companions. Our adoption services provide a loving platform for connecting rescue animals with caring individuals and families. Through meticulous screening processes and personalized matchmaking, we facilitate lifelong bonds built on trust, love, and mutual respect.</p>

<h6 className="fw-bolder text-center" style={{fontSize:'large'}}>Products for Pets:</h6>

<p className="my-2 py-2" style={{marginLeft:'4vh', marginLeft:'4vh'}}>Our curated selection of products reflects our dedication to providing only the highest quality essentials and indulgences for pets of all shapes and sizes. From premium nutrition and grooming supplies to stylish accessories and enriching toys, every item in our inventory is carefully chosen to enhance the well-being and happiness of your furry, feathered, or scaly friend.</p>

<p className="my-2 py-2" style={{marginBottom:'5vh', marginLeft:'4vh', marginLeft:'4vh',}}>At O & A Pet Destination, we invite you to embark on a journey of discovery, companionship, and unconditional love. Together, let us celebrate the joy of pet ownership and nurture lasting relationships that enrich both our lives and the lives of our cherished animal companions.</p>

<hr />
<div className="container">
     <div className="row">
    <div className="col-6 float-left">
      <h2 className="text-dark display-6 text-center my-4">Where Pet Passion Meets Professionalism</h2>
      <p className="text-center mx-4 my-4">At our pet shop, professionalism isn't just a standard—it's a way of life. We go above and beyond to exceed expectations, providing a welcoming and enriching environment where pets and their owners can thrive together. Come experience the difference firsthand and discover why we're more than just a pet shop—we're a community dedicated to the happiness and welfare of all animals.</p>
    </div>
  <div className=" col-6">
      <img src={dogocean} className="img-fluid border border-info" alt="Dog running along the ocean shoreline."/>
    </div>
    <div className="col-6">
      <img src={dogwithcouple} className="img-fluid border border-info" alt="An older couple and their pet dog."/>
    </div>
    <div className="col-6">
      <h2 className="text-dark display-6 text-center my-4 my-4"> Your Paws-itively Perfect Pet Shop Experience </h2>
      <p className="text-center  mx-4 my-4">We're all about going the extra mile! Here, you'll find not only top-notch resources but also the kind of grade A customer service that makes you and your furry friend feel like family.</p>
    </div>
    <div className="col-6">
  <h2 className="text-dark display-6 text-center my-4">Ready for Your Next Best Friend?</h2>
  <p className="text-center mx-4 my-4">Your journey to pet parenthood starts here! Whether you're looking for a playful kitten to brighten your days or a loyal companion to share your adventures, we have just the furry friend waiting to steal your heart. Don't wait any longer—swing by our adoption page now and start your unforgettable journey to finding your purrfect match!</p>
  <div className="text-center">
    <a href="/shop" className="btn btn-info btn-lg btn-3d">Explore Adoptions</a>
  </div>
</div>
    <div className="col-6">
      <img src={kitten} className="img-fluid border border-info" alt="Kitten being pet."/>
    </div>
    </div>
    </div>
  </div>
        </div>
      </div>
    
  );
};

export default Home;