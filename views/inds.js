// DOM elements
const btnAddField = document.getElementById('addFieldBtn');
const tableForm = document.getElementById('tableForm');
const addRecordForm = document.getElementById('addRecordForm');
const createTableBtn = document.getElementById('createTable');
const main = document.getElementById('main');
const tableListDiv = document.getElementById('table-list');
const mainContent = main.innerHTML;

// Event listeners
document.addEventListener('DOMContentLoaded', getAllTablesApi);
btnAddField.addEventListener('click', addField);
tableForm.addEventListener('submit', createTable);
addRecordForm.addEventListener('submit', addRecord);
createTableBtn.addEventListener('click', renderCreateTable);

// Function to render create table form
function renderCreateTable() {
  main.innerHTML = mainContent;
  document.getElementById('addFieldBtn').addEventListener('click', addField);
  document.getElementById('tableForm').addEventListener('submit', createTable);
}

// Function to add a new field to the create table form
function addField(e) {
  const inputDiv = document.getElementById('field-div');
  const typeDiv = document.getElementById('type-div');
  const inputField = '<input type="text" class="form-control mb-2 fieldName" placeholder="Enter Field Name" name="field">';
  const selectField = `<select class="form-select mb-2 typeName" aria-label="Default select example">
    <option selected>Select Type</option>
    <option value="text">STRING</option>
    <option value="int">INTEGER</option>
    <option value="double">DOUBLE</option>
    <option value="boolean">BOOLEAN</option>
  </select>`;
  inputDiv.insertAdjacentHTML('beforeend', inputField);
  typeDiv.insertAdjacentHTML('beforeend', selectField);
}

// Function to handle the form submission and create a table
function createTable(e) {
  e.preventDefault();
  const Table = {
    tableName: null,
    columns: [],
  };
  const tableName = document.getElementById('tableName').value;
  const fieldValue = Array.from(document.getElementsByClassName('fieldName'));
  const typeValue = Array.from(document.getElementsByClassName('typeName'));

  Table.tableName = tableName;
  for (let i = 0; i < fieldValue.length; i++) {
    Table.columns.push({ columnName: fieldValue[i].value, columnType: typeValue[i].value });
  }

  if (Table.tableName && Table.columns.length > 0) {
    createTableApi(Table);
    this.reset();
  } else {
    alert('Enter Table Details');
  }
}

// Function to create a list item for the table in the sidebar
function createTableList(table) {
  const div = document.createElement('div');
  const tableList = `<a href="/database/getTableData/${table}" class="tableList list-group-item list-group-item-action bg-light p-2 mb-2 rounded">${table}<i class="fa-sharp fa-solid fa-trash delete float-end" style="color:red"></i></a>`;
  div.innerHTML = tableList;
  div.addEventListener('click', getTableData);
  tableListDiv.appendChild(div);
}

// Function to handle the click on a table in the sidebar
function getTableData(e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    const link = e.target.parentElement.href;
    const dropLink = link.replace('getTableData', 'dropTable');
    dropTableApi(dropLink);
  } else {
    getTableDataApI(e.target.href);
  }
}
