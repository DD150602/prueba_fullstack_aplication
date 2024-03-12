import { useState } from 'react'

export default function useForm (defaultValues) {
  const [values, setValues] = useState(defaultValues)

  const handelInputCange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  return {
    values,
    setValues,
    handelInputCange
  }
}
