import React, { useState } from 'react';
import InputForm from './components/InputForm';
import DisplayCard from './components/DisplayCard';

function App() {
  const [businessData, setBusinessData] = useState(null);

  const fetchBusinessData = async (name, location) => {
    try {
      const response = await fetch('http://localhost:3000/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location }),
      });
      const data = await response.json();
      if (response.ok) {
        setBusinessData(data);
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const regenerateHeadline = async () => {
    if (!businessData) return;
    try {
      const response = await fetch(
        `http://localhost:3000/regenerate-headline?name=${encodeURIComponent(businessData.name)}&location=${encodeURIComponent(businessData.location)}`
      );
      const data = await response.json();
      setBusinessData({ ...businessData, headline: data.headline });
    } catch (error) {
      console.error('Regenerate error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Local Business Dashboard</h1>
      <InputForm onSubmit={fetchBusinessData} />
      {businessData && <DisplayCard data={businessData} onRegenerate={regenerateHeadline} />}
    </div>
  );
}

export default App;