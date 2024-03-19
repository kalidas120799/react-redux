import React, { useContext } from 'react';
import { UsersContext } from "../context/users";
import { useState } from 'react';
import { Component } from 'react';

const Home = () => {
  const { addUser, removeUsers } = useContext(UsersContext);
  const [name, setName] = useState("")

  return (
    <div>
      <div>Users</div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <div><button onClick={() => addUser({
        name,
        id: Date.now()
      })}>Add User</button></div>
      <div><button onClick={() => removeUsers()}>Remove Users</button></div>

      <UsersList />
    </div>
  )
}

export class UsersList extends Component {
  static contextType = UsersContext; // variable name must contextType
  render() {
    const { users } = this.context;
    return (
      <ul>
        {
          users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))
        }
      </ul>
    )
  }
}

export default Home