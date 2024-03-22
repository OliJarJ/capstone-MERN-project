// pages/ContactForm.js

import React, { useState } from 'react'; // Importing necessary modules
import axios from 'axios'; // Importing Axios for making HTTP requests

const ContactForm = () => { // Define ContactForm component
  const [name, setName] = useState(''); // State for storing name input value
  const [email, setEmail] = useState(''); // State for storing email input value
  const [message, setMessage] = useState(''); // State for storing message textarea value
  const [error, setError] = useState(null); // State for storing error message from server
  // const [emptyFields, setEmptyFields] = useState(null); // State for storing names of empty fields reported by server

  const handleSubmit = async (e) => { // Function to handle form submission
    e.preventDefault(); // Prevent default form submission behavior

    const contactData = { name, email, message }; // Create object with form data

    try {
      const response = await axios.post('http://localhost:4000/contact', contactData); // Send POST request to server with form data
      console.log(response.data); // Log response from server to console

      // Reset form fields and state after successful submission
      setName('');
      setEmail('');
      setMessage('');
      setError(null);
      // setEmptyFields([]);
    } catch (error) { // Catch any errors that occur during form submission
      console.error('Error submitting message:', error); // Log error to console
      if (error.response) { // If server responds with error
        setError(error.response.data.error); // Set error message from server response
        // setEmptyFields(error.response.data.emptyFields); // Set emptyFields reported by server
      } else { // If error originates from client or network
        setError('An error occurred. Please try again later.'); // Set generic error message
        // setEmptyFields([]); // Clear emptyFields state
      }
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>{ /*/ Render form with onSubmit event handler*/}
      <h3 className="text-info">Leave us a message!</h3> {/*// Heading indicating purpose of form*/}

      <label>Name</label> {/* // Label for name input field}*/}
      <input
        type="text"
        value={name} // Value bound to name state
        onChange={(e) => setName(e.target.value)} // Update name state on input change
        required // Required field
      />

      <label>Email:</label>
      <input
        type="email"
        value={email} // Value bound to email state
        onChange={(e) => setEmail(e.target.value)} // Update email state on input change
        required // Required field
      />

      <label>Message:</label> 
      <textarea
        value={message} // Value bound to message state
        onChange={(e) => setMessage(e.target.value)} // Update message state on input change
        required // Required field
      ></textarea>

      <button type="submit">Submit</button> 
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ContactForm; // Export ContactForm component
