import React from 'react';
import MUIDataTable from "mui-datatables";
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';

const data = [{
  "id": 1,
  "name": "Rock",
  "email": "rock@demo.com",
  "designation": "Software Developer",
},
{
  "id": 2,
  "name": "Jone",
  "email": "jone@demo.com",
  "designation": "Java Developer",
},
{
  "id": 3,
  "name": "Tom",
  "email": "Tom@demo.com",
  "designation": "Frontend Developer",
},
{
  "id": 4,
  "name": "Robert",
  "email": "robert@demo.com",
  "designation": "Backend Developer",
},
{
  "id": 5,
  "name": "Zac",
  "email": "zac@demo.com",
  "designation": "Ios Developer",
},
{
  "id": 6,
  "name": "David",
  "email": "david@demo.com",
  "designation": "Android Developer",
}]
const COL_ID = { name: "id", label: "ID", options: { sort: true, filter: true } }
const COL_NAME = { name: "name", label: "Name", options: { sort: true, filter: true } }
const COL_EMAIL = { name: "email", label: "Email", options: { sort: true, filter: true } }
const COL_DESIGNATION = { name: "designation", label: "Designation", options: { sort: true, filter: true } }
const COL_ACTIONS = (deleteItem) => ({
  name: "action", label: "Action", options: {
    sort: true, filter: true,
    customBodyRender: (item) => {
      return (
        <React.Fragment>
          <IconButton onClick={() => deleteItem(item.id)}><DeleteIcon /></IconButton>
        </React.Fragment>
      );
    }
  }
})

const tableColumns = (deleteItem) => [COL_ID, COL_NAME, COL_EMAIL, COL_DESIGNATION, COL_ACTIONS(deleteItem)]

const OPTS = {
  selectableRows: false,
  responsive: 'stacked',
  print: false,
  download: false,
  viewColumns: false,
}

class App extends React.Component {

  deleteItem = (id) => {
    console.log(id, "sadfasd");
  }

  render() {
    const displayData = data.map((row, index) => [row.id, row.name, row.email, row.designation, {id:row.id}]);
    return (
      <React.Fragment>
        <div className="App">
          <h1>MUI Datatable with react</h1>
          <MUIDataTable
            title={""}
            data={displayData}
            columns={tableColumns(this.deleteItem)}
            options={OPTS}
          />
        </div>
      </React.Fragment> 
    );
  }
}

export default App;
