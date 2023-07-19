import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",
    initialState: {
            userInfo: null
    },
    reducers: {
        getUserInfo() { },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
    },
});
export const authAction = authSlice.actions;
export default authSlice;