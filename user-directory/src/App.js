import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard"
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import {users} from "./data";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the users array
  state = {
    users
  };

  // removeFriend = id => 
  // {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.users and render a user card component for each user object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.users.map(user => (
          <EmployeeCard
            // remove user ={this.remove user}
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
//                    (SORT) (FILTER)
//  
// ID  NAME       DEPARTMENT  ROLE           EMAIL (WHAT IS THIS COMPONENT CALLED?)
// 1   ALEXANDER  SALES       SALES MANAGER  alex@fakeemail