import React from 'react'
import { ErrorMessage, Field } from 'formik';
import FieldError from './FieldError'

export default function TextArea(props) {
    const { label, name, ...rest} = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}> {label} </label>
        <Field as='textarea' id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={FieldError} />
    </div>
  )
}
