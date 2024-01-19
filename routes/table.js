const express = require('express');

// Create an Express Router
const router = express.Router();

// Import the table controller
const tableController = require('../controllers/table');

// Define routes and link them to the corresponding controller methods

// Route for creating a new table
router.post('/createTable', tableController.createTable);

// Route for adding a new record to a table
router.post('/addRecord', tableController.addRecord);

// Route for getting a list of all tables
router.get('/getAllTables', tableController.getAllTables);

// Route for getting data from a specific table
router.get('/getTableData/:tableName', tableController.getTableData);

// Route for deleting a record from a table
router.post('/deleteRecord', tableController.deleteRecord);

// Route for dropping a table
router.post('/dropTable/:tableName', tableController.dropTable);

// Export the router for use in the main application
module.exports = router;
