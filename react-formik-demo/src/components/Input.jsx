import React from 'react';
import { ErrorMessage, Field } from 'formik';
import FieldError from './FieldError'

export default function Input(props) {
    const { label, name, ...rest} = props;
    console.log('label value', label);
  return (
    <div className='form-control'>
        <label htmlFor={name}> {label} </label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={FieldError} />
    </div>
  )
}
