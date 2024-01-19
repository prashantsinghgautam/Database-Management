const mysql = require('mysql2');

// Create a connection pool to MySQL database
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'database_mangement',
    password: 'admin',
    port: 3000 // Use the standard MySQL port
});

// Export the promise-based pool for use in other modules
module.exports = pool.promise();
