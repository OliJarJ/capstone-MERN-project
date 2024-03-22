// pages/Shop.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import shop from '../components/shop';

const ShopPage = () => {
  const [shop, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/shop'); // Assuming your backend API endpoint is '/api/products'
        console.log(response)
        setProducts(response.data); // Assuming the backend returns an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      <h1>Available Animals</h1>
      <div>
        {shop.map(shop => (
          <div key={shop._id}>
            <h2>{shop.title}</h2>
            <p>{shop.description}</p>
            <p>Category: {shop.category}</p>
            <p>Price: {shop.price}</p>
            <p>Date Added: {new Date(shop.date_added).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
