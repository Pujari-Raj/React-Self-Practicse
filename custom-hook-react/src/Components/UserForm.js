import React, { useState } from 'react'
import useInput from '../Hooks/useInput'

const UserForm = () => {

    // const [firstname, setFirstName] = useState('');
    // const [lastname, setLastName] = useState('');

    // const submitHandler = e => {
    //     e.preventDefault();
    //     alert(`Hello ${firstname} ${lastname}`);
    // };

    const [firstname, bindfirstname, resetfirstname] = useInput('');
    const [lastname, bindlastname, resetlastname] = useInput('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstname} ${lastname}`);
        resetfirstname();
        resetlastname();
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>FName</label>
                    <input
                        // value={firstname}
                        // onChange={e => setFirstName(e.target.value)}
                        {...bindfirstname}
                        type="text" />
                </div>
                <div>
                    <label>LName</label>
                    <input
                        // value={lastname}
                        // onChange={e => setLastName(e.target.value)}
                        {...bindlastname}
                        type="text" />
                </div>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default UserForm