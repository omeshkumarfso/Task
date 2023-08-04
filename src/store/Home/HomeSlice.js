const { createSlice } = require("@reduxjs/toolkit");

const homeSlice = createSlice({
    name:'home',
    initialState:{
        data:[]
    },
    reducers:{
        setData(state,action){
            state.data = action.payload
        }
    }
})

export const homeActions = homeSlice.actions

export default homeSlice;