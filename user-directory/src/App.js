import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard"
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
// import Button from "./components/Button"
import {users} from "./data";
import "./App.css";


// conversion to Class based programming w/ assistance of tutor Vivian Nguyen

class App extends Component {
  // Setting this.state.users to the users array
  state = {
    users
  };

  removeUsers = id => 
  {
    // Filter this.state.users for users with an id not equal to the id being removed
    const users = this.state.users.filter(user => user.id !== id);
    // Set this.state.users equal to the new user array
    this.setState({ users });
  };
  
  sortUsers = name => 
  {
    // Sort this.state.users by user name
    const users = this.state.users.sort((a, b) => (a.name > b.name) ? 1 : -1)

    // solution c/o stack overflow

   
    // Set this.state.users equal to the new users array
    this.setState({ users });
  };

  // Map over this.state.users and render a user card component for each user object
  render() {
;

    return (
      <Wrapper>
        <Title>Employee Directory</Title>

        <button
         onClick={this.sortUsers}>Sort by Name</button>
         
        {this.state.users.map(user => (
          <EmployeeCard
            removeUsers ={this.removeUsers}
            id={user.id}
            key={user.id}
            name={user.name}
            department={user.department}
            role={user.role}
            email={user.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;




// APP renders:

// USER DIRECTORY:
//                    (SORT)? (FILTER)?
//  
// ID  NAME       DEPARTMENT  ROLE           EMAIL (WHAT IS THIS COMPONENT CALLED?)
// 1   ALEXANDER  SALES       SALES MANAGER  alex@fakeemail