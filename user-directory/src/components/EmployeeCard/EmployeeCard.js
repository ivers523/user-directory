import React from "react";
import "./EmployeeCard.css"

const EmployeeCard = props => (
  <div className="card">
    <div className="content">
      <ul>
        <li>
          <strong>ID:</strong>{props.id}
        </li>
        <li>
          <strong>NAME:</strong> {props.name}
        </li>
        <li>
          <strong>DEPARTMENT:</strong>{props.department}
        </li>
        <li>
          <strong>ROLE:</strong>{props.role}
        </li>
        <li>
          <strong>E-MAIL:</strong>{props.email}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeEmployee(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default EmployeeCard;

// convert array of objects to array of react components
// <h3>{tableHeader}</h3>
// <h3>{tableHeader}</h3>
// <h3>{tableHeader}</h3>

// render() {
//     const data = [{ "name": "test1" }, { "name": "test2" }];
//     const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
