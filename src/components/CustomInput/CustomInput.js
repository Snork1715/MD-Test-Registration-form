import { useController } from 'react-hook-form'
import './CustomInput.css'

const CustomInput = ({ name, type = 'text', label, control, rules }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  })
  return (
    <div>
      <label htmlFor={name} className='input-label'>
        {label}
      </label>
      <div>
        <input
          {...field}
          type={type}
          className={`input-field ${error ? 'error' : ''}`}
        />
      </div>
      {error && <span className='error-message'>{error.message}</span>}
    </div>
  )
}

export default CustomInput
