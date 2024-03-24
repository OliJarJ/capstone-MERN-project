import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const ShopPage = () => {
  const [shop, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/shop'); // Assuming your backend API endpoint is '/api/products'
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
      <h1 className="text-center mt-5 mb-4">Our Animals</h1>
      <div className="row">
        {shop.map(shop => (
          <div className="col-lg-4 col-md-6 mb-4" key={shop._id}>
            <div className="card h-100">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Animal" />
              <div className="card-body">
                <h5 className="card-title">{shop.title}</h5>
                <p className="card-text">{shop.description}</p>
                <p>Category: {shop.category}</p>
                <p>Price: ${shop.price}</p>
                <p>Date Added: {new Date(shop.date_added).toLocaleDateString()}</p>
                <a href="#" className="btn btn-primary btn-block">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;