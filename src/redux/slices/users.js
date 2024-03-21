import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [],
    isRequesting: false
}

const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        fetchUsers: (state, action) => {
            state.isRequesting = true
        },
        addUsers: (state, action) => {
            state.isRequesting = false;
            state.users = [...state.users, ...action.payload];
        },
        updateUsers: (state, action) => {
            state.users = action.payload
        }
    }
});

export const { addUsers, fetchUsers, updateUsers } = usersSlice.actions;
export default usersSlice.reducer;