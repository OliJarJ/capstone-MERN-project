// pages/Products.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products'); // Assuming your backend API endpoint is '/api/products'
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
      <h1>Products</h1>
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Date Added: {new Date(product.date_added).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;