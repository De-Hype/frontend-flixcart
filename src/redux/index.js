import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoggedIn: true,
    clickCopy:false,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
       loggedUser:(state)=>{
            state.isLoggedIn = false
        },
        hideCheckEmailNotification:(state)=>{
            state.showCheckEmail= false
        },
        ClickCopy:(state)=>{
            state.clickCopy = true
        },
    }
})

export const {loggedUser, hideCheckEmailNotification, ClickCopy} = userSlice.actions
export default userSlice.reducer