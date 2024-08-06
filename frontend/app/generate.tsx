import React, { useState } from 'react';
import axios from 'axios';

const MusicGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [music, setMusic] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'http://localhost:8085/api/music/',
        { prompt },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      );
      setMusic(response.data);
    } catch (error) {
      console.error('There was an error generating music!', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Generate Music</button>
      </form>
      {music && <p>Generated Music: {music.title}</p>}
    </div>
  );
};

export default MusicGenerator;
