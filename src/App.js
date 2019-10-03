import React from 'react';
import MUIDataTable from "mui-datatables";
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';
const axios = require('axios');

const COL_ID = { name: "id", label: "ID", options: { sort: true, filter: true } }
const COL_NAME = { name: "name", label: "Name", options: { sort: true, filter: true } }
const COL_SALARY = { name: "salary", label: "SALARY", options: { sort: true, filter: true } }
const COL_AGE = { name: "age", label: "AGE", options: { sort: true, filter: true } }
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

const tableColumns = (deleteItem) => [COL_ID, COL_NAME, COL_SALARY, COL_AGE, COL_ACTIONS(deleteItem)]

const OPTS = {
  selectableRows: false,
  responsive: 'stacked',
  print: false,
  download: false,
  viewColumns: false,
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => {
        const data = res.data;
        this.setState({
          data,
        });
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  deleteItem = (id) => {
    axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
      .then(res => {
        console.log(res);
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    const { data } = this.state;
    const displayData = data.map((row, index) => [row.id, row.employee_name, row.employee_salary, row.employee_age, { id: row.id }]);
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
