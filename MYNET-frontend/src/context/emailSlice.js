import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    emailInit:''
}

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers:{
        emailInput: (state, {payload}) => {
            state.emailInit = payload.email
            Cookies.set("emailCook",JSON.stringify(payload.email));
        }
    },
})

export const { emailInput } = emailSlice.actions

export default emailSlice.reducer