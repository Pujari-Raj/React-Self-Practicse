import React, { useState } from 'react'

export default function Login() {

    const [userCredential, setuserCredential] = useState({
        username: "",
        pass: "",
        email: "",
        phone: "",
    });

    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);
     
        const value = event.target.value;
        const name = event.target.name;

        // using spread operator to minimize the code
        setuserCredential((prevValue)  => {
            return {
                ...prevValue,
                [name] : value,
            }
        })

        // setuserCredential((prevValue) =>{
        //     if (name === "uname") {
        //         return {
        //             username: value,
        //             pass: prevValue.pass,
        //             email: prevValue.email,
        //             phone: prevValue.phone,
        //         }
        //     }
        //     if (name === "pass") {
        //         return {
        //             username: prevValue.username,
        //             pass: value,
        //             email: prevValue.email,
        //             phone: prevValue.phone,
        //         }
        //     }
        //     if (name === "email") {
        //         return {
        //             username: prevValue.username,
        //             pass: prevValue.pass,
        //             email: value,
        //             phone: prevValue.phone,
        //         }
        //     }
        //     if (name === "phone") {
        //         return {
        //             username: prevValue.username,
        //             pass: prevValue.pass,
        //             email: prevValue.email,
        //             phone: value,
        //         }
        //     }
        // });
    }
    const submitForm = (event) =>{
        event.preventDefault();

        setuserCredential(userCredential.username);
        setuserCredential(userCredential.pass);
    };
    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <h1>Hey {userCredential.username} {userCredential.pass}  </h1>
                    <p>{userCredential.email} {userCredential.phone}</p>
                    <input type="text" placeholder='Enter userName'
                        name='username'
                        onChange={inputEvent}
                        value={userCredential.username}
                    />
                    <input type="text" placeholder='Enter Password'
                        name='pass'
                        onChange={inputEvent}
                        value={userCredential.pass}
                    />
                    <input type="email" placeholder='Enter Email'
                        name='email'
                        onChange={inputEvent}
                        value={userCredential.email}
                    />
                    <input type="number" placeholder='Enter phone'
                        name='phone'
                        onChange={inputEvent}
                        value={userCredential.phone}
                    />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
