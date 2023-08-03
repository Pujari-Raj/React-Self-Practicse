import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";


const Toastdemo = () => {

    // functn for different types of toasts
    const handleClick = (toastType) => {
        switch (toastType) {
            case 'success':
                toast.success('User Added Successfully');
                break;
            case 'error':
                toast.error('Operation Unsuccessfull');
                break;
            case 'warning':
                toast.warn('Warning Something Is going wrong');
                break;
        }
    }

    // states
    const [location, setLocation] = useState("top-right");
    const [toastType, setToastType] = useState("");

    //
    // const handleClick = () => {
    //     if (toastType === "success") {
    //         console.log('into success')
    //         toast.success("Success message", {
    //             position: location,
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: false,
    //             onClose: () => setToastType(""),
    //             action: <button onClick={() => toast.dismiss()}>dismiss</button>,
    //         });
    //     } else if (toastType === "error") {
    //         console.log('into error')
    //         toast.error("Error message", {
    //             position: location,
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: false,
    //             onClose: () => setToastType(""),
    //             action: <button onClick={() => toast.dismiss()}>dismiss</button>,
    //         });
    //     } else if (toastType === "warning") {
    //         console.log('into warning')
    //         toast.warn("Warning message", {
    //             position: location,
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: false,
    //             onClose: () => setToastType(""),
    //             action: <button onClick={() => toast.dismiss()}>dismiss</button>,
    //         });
    //     }
    // }

    return (
        <>
            <div>
                <ToastContainer
                    position='top-right'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme='colored'
                />
                <button style={{
                    marginRight: '20px', backgroundColor: '#4CAF50',
                    border: 'none',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px'
                }}

                    onClick={() => {
                        // setToastType("success");
                        // setLocation("top-right")
                        // handleClick();
                        handleClick("success");
                    }}>Show Success Toast</button>

                <button style={{
                    marginRight: '20px', backgroundColor: 'red',
                    border: 'none',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px'
                }}

                    onClick={() => {
                        // setToastType("error");
                        // setLocation("top-right")
                        // handleClick();

                        handleClick("error");
                    }}>Show error Toast</button>

                <button
                    style={{
                        marginRight: '20px', backgroundColor: 'crimson',
                        border: 'none',
                        color: 'white',
                        padding: '15px 32px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px'
                    }}

                    onClick={() => {
                        // setToastType("warning")
                        // setLocation("top-right")
                        // handleClick();

                        handleClick("warning");
                    }}>Show warning Toast</button>
            </div>

        </>
    )
}

export default Toastdemo