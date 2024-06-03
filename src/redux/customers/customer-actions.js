import shortid from 'shortid'
import types from './customer-types'
import { createAction } from '@reduxjs/toolkit'

const deleteCustomers = createAction(types.DELETE)
const addCustomers = createAction(types.ADD, (customerData) => ({
  payload: {
    id: shortid.generate(),
    ...customerData,
  },
}))

const actions = { deleteCustomers, addCustomers }

export default actions
