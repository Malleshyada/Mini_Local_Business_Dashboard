const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const headlines = [
  "Discover Why [Name] is [Location]'s Top Choice in 2025",
  "Experience the Best of [Location] with [Name]'s Excellence",
  "Why [Name] Stands Out as [Location]'s Premier Business",
  "[Name]: Your Go-To Destination in [Location] for 2025",
  "Unlock the Magic of [Location] with [Name]'s Unique Offerings",
];

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }
  const headline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('[Name]', name)
    .replace('[Location]', location);
  res.json({
    rating: 4.3,
    reviews: 127,
    headline,
    name,
    location,
  });
});

app.get('/regenerate-headline', (req, res) => {
  const { name = 'Business', location = 'City' } = req.query;
  const headline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('[Name]', name)
    .replace('[Location]', location);
  res.json({ headline });
});

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port);
});