import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import {users} from "./data"
import Employees from "./components/tableheader";


// The application (APP) needs to render a TABLE of USERS on page load

export default function App() {
  return (
    <div className="app">
      <h1 className="header text-center">User Directory</h1>
      <Employees  />
    </div>
  )
};


// APP renders:

// USER DIRECTORY:
//                    (SORT) (FILTER)
//  
// ID  NAME       DEPARTMENT  ROLE           EMAIL (WHAT IS THIS COMPONENT CALLED?)
// 1   ALEXANDER  SALES       SALES MANAGER  alex@fakeemail.com