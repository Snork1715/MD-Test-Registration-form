import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import CustomInput from '../CustomInput'
import CustomCheckBox from '../CustomCheckBox'
import CustomSelect from '../CustomSelect'
import actions from '../../redux/customers/customer-actions'
import Table from '../Table'
import './Form.css'

const Form = () => {
  const mailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const phoneRegExp = /^\d+$/
  const dispatch = useDispatch()

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      userName: '',
      surename: '',
      phoneNumber: '',
      email: '',
      gender: '',
      address: '',
      confirmed: false,
    },
  })

  const onSubmit = (data) => {
    dispatch(actions.addCustomers(data))
    console.log(data)
    reset()
  }

  return (
    <div>
      <form>
        <CustomInput
          type='text'
          label='Имя'
          name='userName'
          control={control}
          rules={{ required: `Поле обязательно !` }}
        />
        <CustomInput
          type='text'
          label='Фамилия'
          name='surename'
          control={control}
          rules={{ required: `Поле обязательно !` }}
        />
        <CustomInput
          type='text'
          label='Номер телефона'
          name='phoneNumber'
          control={control}
          rules={{
            required: `Поле обязательно !`,
            pattern: {
              value: phoneRegExp,
              message: 'Разрешены только цифры',
            },
          }}
        />
        <CustomInput
          type='text'
          label='Адрес'
          name='address'
          control={control}
          rules={{
            required: `Поле обязательно !`,
          }}
        />
        <CustomInput
          type='text'
          label='Email'
          name='email'
          control={control}
          rules={{
            required: `Поле обязательно !`,
            pattern: {
              value: mailRegExp,
              message: 'Введите валидный Email',
            },
          }}
        />
        <CustomSelect
          name='gender'
          control={control}
          label='Пол'
          rules={{ required: 'Выберите Ваш пол !' }}
          options={[
            { value: 'male', label: 'Мужчина' },
            { value: 'female', label: 'Женщина' },
          ]}
        />
        <CustomCheckBox
          name='confirmed'
          control={control}
          label='Я согласен с условиями и положениями'
          rules={{ required: 'Подтвердите согласие с условиями !' }}
        />
        <button
          className='submitButton'
          onClick={handleSubmit((data) => onSubmit(data))}
        >
          Register
        </button>
      </form>
      <Table />
    </div>
  )
}

export default Form
