Database Management Project

This project is a simple web application for managing databases, creating tables, and performing CRUD operations on records.

Features:

- Create tables with custom fields
- Add, update, and delete records in the tables
- View and interact with data in a tabular format

Technologies Used:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL
- Additional libraries: Axios, Bootstrap

Getting Started:

1. Clone the repository:

   git clone https://github.com/prashantsinghgautam/database-management.git
   cd database-management

2. Install dependencies:

   npm install

3. Connecting the Database
   Connect MySQL with credentials

4. Run the application:

   npm start

5. Open your web browser and go to http://localhost:3000 to access the application.

Usage:

- Create a new table with custom fields.
- Insert records into the created table.
- View and interact with the data in tabular format.
- Delete records if needed.

API Endpoints:

- POST /database/createTable: Create a new table.
- POST /database/addRecord: Add a record to a table.
- POST /database/deleteRecord: Delete a record from a table.
- GET /database/getAllTables: Get a list of all tables.
- GET /database/getTableData/:tableName: Get data for a specific table.
- POST /database/dropTable/:tableName: Drop (delete) a table.

Contributing:

Contributions are welcome! Feel free to submit issues and pull requests.

License:

This project is licensed under the MIT License.
