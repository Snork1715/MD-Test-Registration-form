import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../redux/customers/customer-actions'
import './Table.css'

const Table = () => {
  const data = useSelector((state) => state.customers)
  const dispatch = useDispatch()

  const handleRemove = (index) => {
    dispatch(actions.deleteCustomers(index))
  }

  return data.length > 0 ? (
    <table className='data-table'>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Телефон</th>
          <th>Email</th>
          <th>Пол</th>
          <th>Адрес</th>
          <th>Соглашение</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.userName}</td>
            <td>{item.surename}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.address}</td>
            <td>{item.confirmed ? 'Да' : 'нет'}</td>
            <td>
              <button
                onClick={() => handleRemove(item.id)}
                className='remove-button'
              >
                ×
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className='no-data-table'>Данные клиентов отсутствуют !!!</div>
  )
}

export default Table
