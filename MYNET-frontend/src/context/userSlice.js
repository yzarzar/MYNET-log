import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id:0,
    email:'',
    password:''
}

export const UserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUserInfo: (state, action) => {
            const {id, email, password} = action.payload;
            return {...state, id, email, password};
        }
    },
})

export const { setUserInfo } = UserSlice.actions

export default UserSlice.reducer