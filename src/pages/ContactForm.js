// pages/ContactForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = { name, email, message };

    try {
      const response = await axios.post('/api/contact', contactData);
      console.log(response.data); // Log the response from the server

      // Reset form fields and state after successful submission
      setName('');
      setEmail('');
      setMessage('');
      setError(null);
      setEmptyFields([]);
    } catch (error) {
      console.error('Error submitting message:', error);
      if (error.response) {
        setError(error.response.data.error);
        setEmptyFields(error.response.data.emptyFields);
      } else {
        setError('An error occurred. Please try again later.');
        setEmptyFields([]);
      }
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3 className="text-info">Leave us a message!</h3>

      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={emptyFields.includes('name') ? 'error' : ''}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={emptyFields.includes('email') ? 'error' : ''}
        required
      />

      <label>Message:</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={emptyFields.includes('message') ? 'error' : ''}
        required
      ></textarea>

      <button type="submit">Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ContactForm;