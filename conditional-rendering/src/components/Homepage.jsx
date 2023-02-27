import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';

export default function Homepage(props) {

    /*Conditional Rendering*/
    // const isLoggedIn = props.isLoggedIn;
    // // If user is logged in , then he'll get the logout page or else login page
    // if (isLoggedIn) {
    //     return <Login/>;
    // }

    // return <Logout/>;

    /*Rendering using useState hook with help of If-Else */
    // const [isLoggedIn, setisLoggedIn] = useState(false);

    // if (isLoggedIn) {
    //     return <Login>Login!!</Login>;
    // }
    // else{
    //     return <Logout>Logout</Logout>;
    // }

    /*Rendering using Ternary Operator */
    const [isLoggedIn, setisLoggedIn] = useState(false);
    return(
    <div>
        {isLoggedIn ? <Logout>Login</Logout>:<Login>Logout</Login>}
    </div>

    )
}
