const express = require('express');
const path = require('path');
const hbs = require('hbs');

const travelerRoutes = require('./app_server/routes/traveler');

const app = express();

// ----- View engine (Handlebars) -----
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));
hbs.registerHelper('year', () => new Date().getFullYear());

// ----- Static assets -----
app.use(express.static(path.join(__dirname, 'public')));

// ----- Routes -----
app.use('/', travelerRoutes);

// ----- 404 fallback -----
app.use((req, res) => {
  res.status(404);
  res.render('index', { title: 'Travlr Getaways', tagline: 'Page not found.' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

module.exports = app;
