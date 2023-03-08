import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function () {

    const initialValues = {
        name: "",
        email: "",
        channel: ""
    }

    const onSubmit = values => {
        console.log('Form field values', values);
    }

    const validate = values => {
        /*  Using values we will get values of all fields in form and
            For raising the eror we'll use error object and raise it
        */
        let errors = {};

        if (!values.name) {
            errors.name = "Required Field";
        }

        if (!values.email) {
            errors.email = "Required Field";
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.channel) {
            errors.channel = "Required Field";
        }

        return errors
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required Field'),
        email: Yup.string().email('Invalid email format').required('Required Field'),
        channel: Yup.string().required('Required Field')
    })

    const Formik = useFormik({
        /* Creating initial values for all form fields */
        initialValues,
        onSubmit,
        // validate,
        validationSchema,
    });

    // console.log('formik-', Formik.errors);
    /*checking whether input field is touched */
    console.log('formik-', Formik.touched);
    return (
        <div>
            <form onSubmit={Formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur}
                        value={Formik.values.name} />
                    {Formik.touched.name && Formik.errors.name ? (<div className='error'>{Formik.errors.name}</div>) : null}
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} 
                        value={Formik.values.email} />
                    {Formik.touched.email && Formik.errors.email ? (<div className='error'>{Formik.errors.email}</div>) : null}
                </div>
                <div className='form-control'>
                    <label htmlFor="channel">Channel Name</label>
                    <input type="text" name="channel" id="channel"
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} 
                        value={Formik.values.channel} />
                    {Formik.touched.channel && Formik.errors.channel ? (<div className='error'>{Formik.errors.channel}</div>) : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}