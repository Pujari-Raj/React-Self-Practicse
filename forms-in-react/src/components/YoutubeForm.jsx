import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import TextFieldError from './TextFieldError'

export default function () {

    const initialValues = {
        name: "",
        email: "",
        channel: "",
        comments: "",
        about: "",
        /*Nested Objectss */
        social: {
            instagram: "",
            linkedin: ""
        },
        phoneNumbers: ['', ''],
        phNumbers: [''],
    }
    /* To reset the form we can use reset button, and onSubmitProps.resetForm method 
     to reset form on click of submit btn 
     */
    const onSubmit = (values, onSubmitProps) => {
        console.log('Form field values', values);
        onSubmitProps.resetForm();
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required Field'),
        email: Yup.string().email('Invalid email format').required('Required Field'),
        channel: Yup.string().required('Required Field'),
        comments: Yup.string().required('Required Field'),
        about: Yup.string().required('Required Field'),
    })

    /* Creating field level validation for phone number */
    const validatePhoneNumber = value =>{
        let error;
        if(!value){
            error = 'Phone Number is Required';
        }
        return error;
    }

    // const Formik = useFormik({
    //     /* Creating initial values for all form fields */
    //     initialValues,
    //     onSubmit,
    //     // validate,
    //     validationSchema,
    // });

    // console.log('formik-', Formik.errors);
    /*checking whether input field is touched */
    // console.log('formik-', Formik.touched);
    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name"
                        placeholder="Enter Name" />
                 {/* For creating error on textfield when it's left touched and blank 
                we're creating Texterror component and giving it inside component attribute
                which will raise the error*/}
                    <ErrorMessage name='name' component={TextFieldError} />
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" id="email"
                        placeholder="Enter Email" />
                    {/* For creating error on textfield when it's left touched and blank 
                another way of raising the error */}
                    <ErrorMessage name='email'>
                        {errorMsg => <div className='error'>{errorMsg}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor="channel">Channel Name</label>
                    <Field type="text" name="channel" id="channel"
                        placeholder="Enter Channel" />
                    <ErrorMessage name='channel' />
                </div>

                <div className='form-control'>
                    <label htmlFor="comments">Channel Name</label>
                    <Field as="textarea" name="comments" id="comments"
                        placeholder="Enter Comments" />
                    <ErrorMessage name='channel' />
                </div>

                <div className='form-control'>
                    <label htmlFor="about">About</label>
                    <Field name="about" id="about"
                        placeholder="Enter about">
                        {props => {
                            const { field, form, meta } = props
                               console.log(props);
                            return (
                                <div>
                                    <input type='text' id='about' {...field} />
                                    {meta.touched && meta.error ? <div className="">{meta.error}</div> : null}
                                </div>
                            )
                        }}
                    </Field>
                </div>

                <div className='form-control'>
                    <label htmlFor='instagram'>Instagram Profile</label>
                    <Field type='text' name='social.instagram' id='instagram' />
                </div>

                <div className='form-control'>
                    <label htmlFor='linkedin'>Linkedin Profile</label>
                    <Field type='text' name='social.linkedin' id='linkedin' />
                </div>

                <div className='form-control'>
                    <label htmlFor='PrimaryPhone'>PrimaryPhone Profile</label>
                    <Field type='text' id='PrimaryPhone' name='phoneNumbers[0]' />
                </div>

                <div className='form-control'>
                    <label htmlFor='SecondaryPhone'>Secondary Phone No:</label>
                    <Field type='text' id='SecondaryPhone' 
                    name='phoneNumbers[1]' validate={validatePhoneNumber} />
                    <ErrorMessage name='phoneNumbers[1]' component={TextFieldError} />
                </div>

                <div className='form-control'>
                    <label>List of Phone Numbers</label>
                    <FieldArray name='phNumbers'>
            {/* Taking Multiple Phone numbers into one array  phNumbers: [''] using fieldarrayprops
            and its push & remove(methods) , form (object)  
            */}
                        {fieldarrayprops => {
                            const { push, remove, form } = fieldarrayprops
                            // taking values from form object
                            const { values } = form
                            // pushing values form form object into phNumbers array
                            const { phNumbers } = values
                            console.log('Field Array->', fieldarrayprops)
                            return (
                                <div>
                                    {phNumbers.map((phNumber, index) => (
                                        <div key={index}>
                                            <Field name={`phNumbers[${index}]`} />
                                            {index > 0 && (
                                                <button type='button' onClick={() => remove(index)}>Remove Number</button>
                                            )}
                                        </div>
                                    ))}
                                    <button type='button' onClick={() => push('')}>Add Number</button>
                                </div>

                            )
                        }}
                    </FieldArray>
                </div>

                <button type="submit">Submit</button>
                <button type="reset">Reset Form</button>
            </Form>
        </Formik>
    )
}
