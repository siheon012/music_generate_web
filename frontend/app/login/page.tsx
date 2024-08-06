"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';  
import Link from 'next/link';
import React from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8085/api/api-token-auth/', { username, password });
      localStorage.setItem('token', response.data.token);
      router.push('/'); 
    } catch (error) {
      setMessage('There was an error logging in! Please check your credentials and try again.');
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          UserEmail:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
        <button type="button" onClick={() => router.push('/register')}>회원가입</button>
        <ul>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
