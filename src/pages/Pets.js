import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const Pets = () => {
  const [shop, setProducts] = useState([]);

  useEffect(() => {
    
    // Fetch products from backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/pets'); 
        setProducts(response.data); // Assuming the backend returns an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    // Cleanup function
    return () => {
      // Cleanup if necessary
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="container">
      <h1 className="text-center mb-4">Our Animals</h1>
      <div className="row">
        {shop.map(shop => (
          <div className="col-lg-4 col-md-6 mb-4" key={shop._id}>
            <div className="card h-100">
                <img src={shop.imageURL} alt="" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title text-center fw-bold text-secondary">{shop.title}</h5>
                <p className="card-text text-center">{shop.description}</p>
                <p className="fw-bold">Category: {shop.category}</p>
                <p className="fw-bold">Price: ${shop.price}</p>
                <p className="fw-bold">Date Added: {new Date(shop.date_added).toLocaleDateString()}</p>
                <a href="#" className="btn btn-primary btn-block">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Pets;