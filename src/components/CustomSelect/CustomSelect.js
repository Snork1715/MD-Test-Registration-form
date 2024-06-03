import React from 'react'
import { useController } from 'react-hook-form'
import './CustomSelect.css'

const CustomSelect = ({ name, label, options, rules, control }) => {
  const {
    field: { ...inputProps },
    formState: { errors },
  } = useController({
    name,
    rules,
    control,
  })

  return (
    <div className='select'>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...inputProps}>
        <option value=''>Выберите...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && <span className='error'>{errors[name].message}</span>}
    </div>
  )
}

export default CustomSelect
