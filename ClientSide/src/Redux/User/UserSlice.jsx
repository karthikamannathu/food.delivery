import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
   currentUser:[],
   loading: false,
   error:false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading = true;

        },
        signSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signFailure: (state,action) => {
            
            state.loading =false;
            state.error = action.payload;
        } ,
        updateUserStart: (state) => {
            state.loading = true;   
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure: (state,action) => {
            state.loading =false;
            state.error = action.payload;
        } ,
       deleteUserInStart: (state) => {
            state.loading = true;

        },
       deleteUserSuccess: (state, ) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
       deleteUserFailure: (state,action) => {
            state.loading =false;
            state.error = action.payload;
        } ,
   
        signOutUserStart: (state) => {
            state.loading = true;
          },
          signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
          },
          signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
          },
        
    }
})


export const getUser = state => state.user

export const { signInStart
    , signSuccess
    ,signFailure
    , updateUserStart
    ,updateUserSuccess
,updateUserFailure
,deleteUserFailure
,deleteUserSuccess
,deleteUserInStart
,  signOutUserSuccess
} = userSlice.actions;
export default userSlice.reducer;