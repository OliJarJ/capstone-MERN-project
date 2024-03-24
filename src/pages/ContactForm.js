import React, { useState } from 'react';
import axios from 'axios';
import couplewithdog from '../imgs/couple-with-dog.jpg'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {   
    e.preventDefault();

    const contactData = { name, email, message };

    try {
      const response = await axios.post('http://localhost:4000/contact', contactData);
      console.log(response.data);

      setName('');
      setEmail('');
      setMessage('');
      setError(null);
    } catch (error) {
      console.error('Error submitting message:', error);
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
   
    <div>
     <div>
  <img className="img-fluid" src={couplewithdog} alt="A couple and their pet dog" />
</div>
      <form className="create" onSubmit={handleSubmit}>
        <h3 className="text-center my-4 text-secondary display-6">Leave us a message!</h3>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit</button>
        {error && <div className="error">{error}</div>}

        
      </form>

      <div class="row">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.611176869781!2d-84.37845712353605!3d39.228995627069644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840536f0dec042f%3A0x54c665d266579f3e!2sKable%20Academy!5e0!3m2!1sen!2sus!4v1709822438219!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                        <div className="container py-4"><p className="fw-bold my-2 text-white">Kable Academy</p><p className="fw-bold my-2 text-white">
                            4901 Hunt Rd Ste 200
                        </p>
                        <p className="fw-bold my-2 text-white">Blue Ash, OH 45242</p>
                        </div>
                        </div>
      <div className="container">
      <div className=" my-5 mx-2 py-5 py-5 justify-content-center">
        <h3 className="mx-2">Follow us on Social Media:</h3>
        <ul style={{listStyle:'none'}}>
          <li className="social-media-card mx-2"><a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li className="social-media-card mx-2"><a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li className="social-media-card mx-2"><a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;