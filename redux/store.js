import { configureStore } from "@reduxjs/toolkit";
import testReducers from '../redux/features/testSlice'

export const store = configureStore({
    reducer : testReducers
})