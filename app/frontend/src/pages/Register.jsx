import React, { useState } from 'react';
import '../styles/register.css';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import logoImage from '../images/mystoragerecipepng.png';
import { FaEye } from "react-icons/fa";
import  { FaEyeSlash } from "react-icons/fa";

const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0cG96aXdteXZqaWhoc2ZvbXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMDE4MzIsImV4cCI6MjAxODY3NzgzMn0.QjRayszrJ4C22dFFXK4aCfQfOqv-RSYDW9Ny5zmgBEc'
function Register() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://rtpoziwmyvjihhsfomym.supabase.co/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': key
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        console.log(response);
        throw new Error('Erro ao enviar solicitação de registro');
      }

      const responseData = await response.json();
      console.log('Resposta do servidor:', responseData);

    } catch (error) {
      console.error('Erro ao enviar solicitação de registro:', error.message);
    }
    history.push('/');
  };

  const handleLogin = () => {
    history.push('');
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <main
      className="body"
    >
      <div
        className="logo-container"
      >
        <img
          src={logoImage}
          alt="Logo"
        />
      </div>

      <form
        className="form"
      >

        <div
          className="input-container"
        >

          <h5>Email</h5>
			    <label htmlFor="Email">
			    	<input
			    		className="input"
			    		name="email"
			    		type="email"
			    		size="30"
			    		placeholder="Email"
			    		value={ formData.email }
			    		onChange={ handleChange }
              required
			    	/>
			    </label>

          <h5>Username</h5>
          <label htmlFor='Username'>
            <input
              className="input"
              type="text"
              name="username"
              placeholder='Username'
              value={ formData.username }
              onChange={ handleChange }
              required
            />
          </label>

          <h5>Password</h5>
          <label htmlFor="Password">
            <div
            className='password-container'
            >
			    		<input
			    			className="input"
			    			type={ showPassword ? 'text' : 'password' }
			    			size="30"
			    			name="password"
                placeholder="Password"
			    			value={ formData.password }
			    			onChange={ handleChange }
			    		/>
			    		<div
			    			className='password-visibility'
			    			onClick={togglePasswordVisibility}
			    		>
			    		  {showPassword ? <FaEye /> : <FaEyeSlash /> }
			    		</div>
            </div>
          </label>

        </div>

        <div
          className='register-button-container'
        >
          <button 
            type="button"
            className="register-button"
            onClick={ (event) => handleSubmit(event) }
          >
            Register
          </button>
        </div>

        <div
          className="login-router-container"
        >
          <p>
            Already have an account?
          </p>
          <p
            className="login-router-button"
            onClick={ handleLogin }
          >
            Login
          </p>
        </div>

      </form>

      <Footer />
    </main>
  );
};

export default Register;

