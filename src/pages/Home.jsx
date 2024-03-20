import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getUsers, updateUsers } from "../redux/actions/users";

const Home = () => {
  const dispatch = useDispatch();
  const { users, isRequesting } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers({}))
  }, [])

  return (
    <div>
      <div>Users</div>
      <ul>
        {
          (!isRequesting && users.length > 0) && users.map((user) => (
            <li key={user.id} >{user.name}</li>
          ))
        }
      </ul>
      {!isRequesting && users.length === 0 && <div>Data not found</div>}
      {isRequesting && <div>Loading...</div>}
      <div>
        <button onClick={() => dispatch(getUsers({}))} >Fetch Users</button>
      </div>
      {users.length > 0 && <div>
        <button onClick={() => dispatch(updateUsers([]))} >Remove All</button>
      </div>}
    </div>
  )
}

export default Home