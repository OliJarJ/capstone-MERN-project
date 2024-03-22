// pages/AboutUs.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, CardContent } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [aboutContent, setAboutContent] = useState('');

  useEffect(() => {
    axios.get('localhost:4000/aboutus')
      .then(res => {
        setAboutContent(res.data.content);
      })
      .catch(error => {
        console.error('Error fetching about content:', error);
        setAboutContent('');
      });
  }, []);

  return (
    <Container>
      <Card>
        <Card.Header>
          <h4 className="text-center">About Us</h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>{aboutContent}</Card.Text>
          
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutUs;
