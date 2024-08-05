"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !phoneNumber || !password) {
      setMessage('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8085/api/register/', {
        username,
        email,
        phone_number: phoneNumber,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 201) {
        setMessage('User registered successfully');
        router.push('/');
      } else {
        setMessage('Registration failed: ' + (response.data?.error || 'Unknown error'));
      }
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.error || 'Registration failed'));
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
