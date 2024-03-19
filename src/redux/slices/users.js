import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { webAgent } from "../../helpers/web-agent";

const initialState = {
    users: [],
    isRequesting: false
}

export const getUsers = createAsyncThunk("users/get-users", async (params) => {
    try {
        const res = await webAgent.get("/users",params);
        return res.data;
    } catch (ex) {
        console.log(ex)
    }
});

export const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        updateUsers: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = [...state.users,...action.payload];
            state.isRequesting = false;
        }).addCase(getUsers.pending, (state, action) => {
            state.isRequesting = true;
        }).addCase(getUsers.rejected, (state, action) => {
            state.users = [];
            state.isRequesting = false;
        })
    }
});

export const { updateUsers } = usersSlice.actions;
export default usersSlice.reducer;