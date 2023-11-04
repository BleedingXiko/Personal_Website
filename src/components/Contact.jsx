import React, { useState } from 'react';

const formStyle = {
  maxWidth: '400px',
  margin: '15px auto',
  backgroundColor: 'var(--comp)',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid var(--fg)',
  borderRadius: '5px',
  color: 'rgb(0, 0, 0)',
};

const buttonStyle = {
  backgroundColor: 'var(--fg)',
  color: 'var(--comp)',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const successMessageStyle = {
  display: 'block',
  backgroundColor: 'var(--bg_comp)',
  color: 'var(--comp)',
  overflow: 'auto',
  padding: '10px',
  marginTop: '10px',
  borderRadius: '5px',
};

const errorStyle = {
    color: 'red',
  };

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!email.match(emailRegex)) {
        newErrors.email = 'Invalid email format';
      }
    }

    if (message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');

    // Set the success message
    const formDataJSON = JSON.stringify(formData);
    setSuccessMessage('Form submitted successfully! JSON Data: ' + formDataJSON);

    // Clear the success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  return (
    <div>
      <form id="contactForm" style={formStyle}>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            className={errors.name ? 'error' : ''}
            placeholder='Your Name'
          />
          {errors.name && <p style={errorStyle} className="error-message">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            className={errors.email ? 'error' : ''}
            placeholder='Your Email'
          />
          {errors.email && <p style={errorStyle} className="error-message">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={inputStyle}
            className={errors.message ? 'error' : ''}
            placeholder='Your Message'
          />
          {errors.message && <p style={errorStyle} className="error-message">{errors.message}</p>}
        </div>

        <button type="button" onClick={handleSubmit} style={buttonStyle}>
          Submit
        </button>
      <div id="successMessage" style={successMessageStyle}>
        {successMessage}
      </div>
      </form>

    </div>
  );
}

export default ContactForm;
