const Table = require("../models/table");
const db = require("../utils/database");
const Sequelize = require("sequelize");

// Create a new table with specified columns
exports.createTable = async (req, res) => {
  const { tableName, columns } = req.body;

  try {
    await Table.createTable(tableName, columns);
    const result = await Table.getAllTables();
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new record to a specified table
exports.addRecord = async (req, res) => {
  try {
    const { tableName, record } = req.body;
    await Table.addRecord(tableName, record);
    const result = await Table.getTableData(tableName);
    const columns = result[1].map(val => val.name);

    res.json({ tableName, tableData: result[0], columns });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a list of all tables in the database
exports.getAllTables = async (req, res) => {
  try {
    const tables = await Table.getAllTables().then(tables => tables[0]);
    res.json(tables);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get data for a specific table
exports.getTableData = async (req, res) => {
  try {
    const { tableName } = req.params;
    const result = await Table.getTableData(tableName);
    const columns = result[1].map(val => val.name);

    res.json({ tableName, tableData: result[0], columns });
  } catch (error) {
    console.log(error);
  }
};

// Delete a record from a specified table
exports.deleteRecord = async (req, res) => {
  try {
    const { tableName, id } = req.body;
    await Table.deleteRecord(tableName, id);
    const result = await Table.getTableData(tableName);

    const columns = result[1].map(val => val.name);
    res.json({ tableName, tableData: result[0], columns });
  } catch (error) {
    console.log(error);
  }
};

// Drop a table from the database
exports.dropTable = async (req, res) => {
  const { tableName } = req.params;
  try {
    await Table.dropTable(tableName);
    const result = await Table.getAllTables();
    res.json(result[0]);
  } catch (error) {
    // Handle error
    console.log(error);
  }
};
