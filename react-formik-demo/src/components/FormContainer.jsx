import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

export default function FormContainer() {

    const dropdownOptions = [
        {key: 'Select Option', value: ''},
        {key: 'Option 1', value: 'option1'},
        {key: 'Option 2', value: 'option2'},
        {key: 'Option 3', value: 'option3'}
    ]

    const radioOptions = [
        {key: 'Option 1', value: 'Radiooption1'},
        {key: 'Option 2', value: 'Radiooption2'},
        {key: 'Option 3', value: 'Radiooption3'}
    ]

    const checkOptions = [
        {key: 'Option 1', value: 'checkoption1'},
        {key: 'Option 2', value: 'checkoption2'},
        {key: 'Option 3', value: 'checkoption3'}
    ]
    const initailValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        /*CheckBox initialvalue will be blank array bcz we have to take more than 1 input */
        checkBoxOption: [],
        birthDate: null
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required Field'),
        description: Yup.string().required('Required Field'),
        selectOption: Yup.string().required('Required Field'),
        radioOption: Yup.string().required('Required Field'),
        checkBoxOption: Yup.array().min(1, 'Required Field'),
        birthDate: Yup.date().required('Required Field').nullable()
    });
    const onSubmit = values => {
        console.log('Form data', values);
        // console.log('Saved data', JSON.parse(JSON.stringify(values))) 
    }

  return (
    <Formik initialValues={initailValues} validationSchema={validationSchema}
    onSubmit={onSubmit}>
        {formik =>(
            <Form>
                <FormikControl control='input' type='email'
                label='Email' name='email' />

                <FormikControl control='textarea' 
                label='Description' name='description' />

                <FormikControl control='select'
                label='Select One Option'
                name='selectOption' options={dropdownOptions} />

                <FormikControl control='radio'
                label='Choose One Option'
                name='radioOption' options={radioOptions} />

                <FormikControl control='checkbox'
                label='Check atleast one box'
                name='checkBoxOption' options={checkOptions} />

                {/* <FormikControl control='date'
                label='Date Of Birth' 
                name= 'birthDate' /> */}

                <button type='submit'> Submit </button>
            </Form>
        )}
    </Formik>
  )
}
