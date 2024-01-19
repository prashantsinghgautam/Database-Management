const Sequelize = require('sequelize');
const db = require('../utils/database');

// Define a Table class for handling database operations
module.exports = class Table {
  
    // Create a new table with specified columns
    static createTable(tableName, columns) {
        // Add 'id' column as primary key and auto-increment
        columns.unshift({ columnName: 'id', columnType: 'INT AUTO_INCREMENT PRIMARY KEY NOT NULL' });

        // Generate SQL query for table creation
        let query = `CREATE TABLE ${tableName} (`;
        query += columns.map(column => `${column.columnName} ${column.columnType}`).join(', ');
        query += ')';

        // Execute the query
        return db.execute(query);
    }

    // Add a new record to a specified table
    static addRecord(tableName, record) {
        const columns = record.map(rec => rec.columnName);
        const values = record.map(rec => rec.value);

        // Generate SQL query for record insertion
        const query = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${values.map(() => '?').join(', ')})`;

        // Execute the query with values
        return db.execute(query, values);
    }

    // Get a list of all tables in the database
    static getAllTables() {
        return db.execute('SHOW TABLES');
    }

    // Get data for a specific table
    static getTableData(tableName) {
        return db.execute(`SELECT * FROM ${tableName}`);
    }

    // Delete a record from a specified table based on ID
    static deleteRecord(tableName, id) {
        return db.execute(`DELETE FROM ${tableName} WHERE id=${id}`);
    }

    // Drop a table from the database
    static dropTable(tableName) {
        return db.execute(`DROP TABLE ${tableName}`);
    }
};
