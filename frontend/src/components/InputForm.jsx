import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && location) {
      onSubmit(name, location);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700">Business Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter business name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter location"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default InputForm;