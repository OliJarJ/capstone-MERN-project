// components/Home.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [homeContent, setHomeContent] = useState(null);

  useEffect(() => {
    axios.get('/home')
      .then(res => {
        setHomeContent(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home">
      {homeContent ? (
        <>
          <h1>{homeContent.title}</h1>
          <p>{homeContent.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;