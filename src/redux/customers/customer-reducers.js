import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import actions from './customer-actions'

const customersReducer = createReducer([], (builder) => {
  builder
    .addCase(actions.deleteCustomers, (state, { payload }) => {
      return state.filter((item) => item.id !== payload)
    })
    .addCase(actions.addCustomers, (state, { payload }) => {
      console.log('PAY', payload)
      return [payload, ...state]
    })
})

export default combineReducers({
  customers: customersReducer,
})
