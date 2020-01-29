import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// USERS is an array of objects, which we need to convert into JSX (javascript/react components ?)
import { users } from "../data";


const employees = users.map((users) =>
<table class="wrapper">
<tr>
  <th>ID:</th>
  <th>NAME:</th>
  <th>DEPT:</th>
  <th>ROLE:</th>
  <th>E-MAIL:</th>
</tr>
<tr>
  <td>{users.id}</td>
  <td>{users.name}</td>
  <td>{users.department}</td>
  <td>{users.role}</td>
  <td>{users.email}</td>
</tr>
</table>);

function Employees() {

    return (
        <div>
            {employees}
        </div>
    );
}

// convert array of objects to array of react components
// <h3>{tableHeader}</h3>
// <h3>{tableHeader}</h3>
// <h3>{tableHeader}</h3>
export default Employees;

// render() {
//     const data = [{ "name": "test1" }, { "name": "test2" }];
//     const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
