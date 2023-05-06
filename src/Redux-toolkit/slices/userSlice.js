import { createSlice } from "@reduxjs/toolkit";

// * We are going to persist this state so all data in this state will not be lost even if the browser is reloaded
const initialState = {
    isLoggedIn: false,
    lan: "gb",
    mode: "dark"
};

const userSlice = createSlice({
    name: "USER",
    initialState,
    reducers: {
        // * Reducers here to update the state
        setUserIn: (state, action) => {
            // * Perform an action the the states here ==> read more about @Redux-toolkit 
        }
    }
})

export const { setUserIn } = userSlice.actions;
export default userSlice.reducer;