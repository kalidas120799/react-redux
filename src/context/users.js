import { useState } from "react";
import { createContext } from "react";

export const UsersContext = createContext();

const UsersProvider = (props) => {
    const [state, setState] = useState([]);

    const addUser = (user) => setState((e) => [...e, user]);

    const removeUsers = () => setState([]);

    return (
        <UsersContext.Provider value={
            {
                users: state, addUser, removeUsers
            }
        }>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;