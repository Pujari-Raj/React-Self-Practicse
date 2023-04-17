import React from 'react'
import CheckBox from './CheckBox';
import DatePicker from './DatePicker';
import Input from './Input';
import RadioBtn from './RadioBtn';
import Select from './Select';
import TextArea from './TextArea';

function FormikControl(props) {
    const {control, ...rest} = props;
    //Using Swicth case of React
    switch (control) {
        case 'input':
            return <Input {...rest} />    
            // break;
        case 'textarea':
            return <TextArea {...rest} />
            // break;

        case 'select':
            return <Select {...rest} />
            // break;

        case 'radio':
            return <RadioBtn {...rest} />
            // break;
        
        case 'checkbox':
            return <CheckBox {...rest} />
            // break;

        case 'date':
            return <DatePicker {...rest} />
            // break;

        default:
            break;
    }
  return (
    <div>

    </div>
  )
}

export default FormikControl