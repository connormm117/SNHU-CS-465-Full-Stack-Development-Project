// Temporary mock data (you’ll replace with DB later in the course)
const trips = [
  { destination: 'Hawaii',  duration: '7 nights',  price: 1499, code: 'HI-07' },
  { destination: 'Alaska',  duration: '10 nights', price: 1999, code: 'AK-10' },
  { destination: 'Bahamas', duration: '5 nights',  price: 1299, code: 'BH-05' }
];

const index = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways',
    tagline: 'Find your next adventure.',
    trips
  });
};

const listTrips = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways — Trips',
    tagline: 'All available getaways',
    trips
  });
};

module.exports = { index, listTrips };
