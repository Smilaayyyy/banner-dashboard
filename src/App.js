import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css';  // Import the CSS file

function Dashboard() {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(10);
  const [link, setLink] = useState('');
  const [visible, setVisible] = useState(true);

  const updateBanner = () => {
    const updatedBanner = { description, timer, link, isVisible: visible };
    axios.post('http://localhost:10000/api/banner', updatedBanner)
      .then(response => {
        alert('Banner updated successfully!');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="dashboard">
      <h1>Update Banner Content</h1>
      <form onSubmit={(e) => { e.preventDefault(); updateBanner(); }}>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Timer:</label>
        <input
          type="number"
          value={timer}
          onChange={(e) => setTimer(e.target.value)}
        />
        <label>Link:</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <label className="checkbox-label">
          Visible:
          <input
            type="checkbox"
            checked={visible}
            onChange={(e) => setVisible(e.target.checked)}
          />
        </label>
        <button type="submit">Update Banner</button>
      </form>
    </div>
  );
}

export default Dashboard;
