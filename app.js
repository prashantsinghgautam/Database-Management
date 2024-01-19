// Importing required modules
const express = require('express');
const path = require('path');
const tableRoutes = require('./routes/table');
const db = require('./utils/database');

// Creating an Express application
const app = express();

// Middleware for parsing URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serving static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

// Handling root route to serve the 'index.html' file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Routing for '/database' path using the 'tableRoutes' module
app.use('/database', tableRoutes);

// Setting up the server to listen on port 3000
const PORT = 3000;
// Uncomment the line below if you want to sync the database before starting the server
// db.sync().then(() => app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))).catch(err => console.error(err));

// Use this line if you prefer not to sync the database before starting the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
