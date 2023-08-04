import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Auth/AuthSlice'
import homeSlice from './Home/HomeSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        home: homeSlice.reducer
    }
})