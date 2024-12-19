import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    institute: '',
  });
  const [error, setError] = useState('');

  const institutes = ['Institute A', 'Institute B', 'Institute C'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, institute } = formData;
  
    // Ensure no fields are empty
    if (!username || !password || !institute) {
      setError('All fields are required.');
      return;
    }
  
    // Sending login request to PHP backend
    fetch('http://localhost/kiddoklass_backend/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, institute }), // Ensure correct data is sent
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // If login is successful, redirect to homepage
          navigate('/home');
        } else {
          // Show error message if login failed
          setError(data.message);
        }
      })
      .catch((error) => {
        // Handle fetch errors
        console.error('Error:', error);
        setError('An error occurred during login.');
      });
  };
  

  return (
    <div className="login-background">
      <div className="login-form">
        <h2>Login123</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Institute: </label>
            <select
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              required
            >
              <option value="">Select Institute</option>
              {institutes.map((inst, index) => (
                <option key={index} value={inst}>
                  {inst}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
