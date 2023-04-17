import React from 'react'
import { ErrorMessage, Field } from 'formik';
import FieldError from './FieldError'

export default function Select(props) {
    const {label, name, options, ...rest} = props;
  return (
    <div className='form-control'>
        <label htmlFor={name} >{label}</label>
        <Field as='select' id={name} name={name} {...rest}>
            {/*Using Option.map() method to iterate multiple options */}
   
            {options.map(option =>{
                return(
                    <option key={option.key} value={option.value}>
                        {option.key}
                    </option>
                )
            })}
        </Field>
        <ErrorMessage name={name} component={FieldError}></ErrorMessage>
    </div>
  )
}
