import React from 'react'
import { useController } from 'react-hook-form'

const CustomCheckBox = ({ name, label, control, rules }) => {
  const {
    field: { ref, onChange, value, ...inputProps },
    formState: { errors },
  } = useController({
    name,
    control,
    rules,
  })
  console.log('VAL', value)
  return (
    <div className='checkbox'>
      <label>
        <input
          type='checkbox'
          onChange={(e) => onChange(e.target.checked)}
          checked={value}
          {...inputProps}
          ref={ref}
        />
        {label}
      </label>
      <div>
        {errors[name] && (
          <span className='error-message'>{errors[name].message}</span>
        )}
      </div>
    </div>
  )
}

export default CustomCheckBox
