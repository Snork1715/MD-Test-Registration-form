import customersReducer from './customers/customer-reducers'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = customersReducer

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
})

export default store
