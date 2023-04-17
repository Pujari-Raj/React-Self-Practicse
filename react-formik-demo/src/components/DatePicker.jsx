import React, { useState } from 'react'
import DateView from 'react-datepicker'
import { Field, ErrorMessage } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import FieldError from './FieldError'


export default function DatePicker(props) {
    const { label, name, ...rest} = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field>
            {({form, field}) =>{
                const { setFieldValue } = form
                const {value} = field
                return(
                    <DateView
                     {...field} {...rest}
                    selected={value} id={name}
                    onChange={val => setFieldValue(name, val)}
                  />
                )
            }}
        </Field>
        <ErrorMessage name={name} component={FieldError} />
    </div>
  )
}
