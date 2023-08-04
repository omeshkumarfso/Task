const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name:'auth',
    initialState:{
        isAuthenticate: false
    },
    reducers:{
        ToggleIsAuthenticate(state,action){
            state.isAuthenticate = !state.isAuthenticate
        }
    }
  
})

export const authActions = authSlice.actions

export default authSlice