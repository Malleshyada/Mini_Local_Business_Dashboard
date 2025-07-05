import React from 'react';

function DisplayCard({ data, onRegenerate }) {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mt-6">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p className="text-gray-600">{data.location}</p>
      <p className="text-yellow-500">{'★'.repeat(Math.round(data.rating))} ({data.reviews} reviews)</p>
      <p className="mt-2 text-lg">{data.headline}</p>
      <button
        onClick={onRegenerate}
        className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Regenerate Headline
      </button>
    </div>
  );
}

export default DisplayCard;