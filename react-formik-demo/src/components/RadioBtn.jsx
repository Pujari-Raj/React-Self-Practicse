import React from 'react';
import { ErrorMessage, Field } from 'formik';
import FieldError from './FieldError'

export default function RadioBtn(props) {
    const { label, name, options, ...rest} = props;
  return (
    <div className='form-control radio-btns'>
        <label>{label}</label>
        <Field name={name} {...rest}>
            {
                ({field }) => {
                    // console.log(field);
                    /* Looping multiple checkbox option using options.map() function  */
                    return options.map(option =>{
                        return (
            /*React Fragment is a feature in React that allows you to return multiple 
            elements from a React component by allowing you to group a list of children 
            without adding extra nodes to the DOM
                */
                            <React.Fragment key={option.key}>
                                <input type='radio' id={option.value}
                                {...field} value={option.value}
                                checked={field.value === option.value}
                                />   
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }
            }
        </Field>
        <ErrorMessage name={name} component={FieldError} />
    </div>
  )
}
