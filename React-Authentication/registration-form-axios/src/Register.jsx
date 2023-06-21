import React from 'react';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,32}$/;
/* Username should be around 4-24 characters including the alphabets& special characters(-,_)*/
const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
/* Password require one uppercase,lowercase letter,digit,special character it should be around 8-24 characters   */
/* This is end point for registraion in backend */
const REGISTER_URL = '/register';

const Register = () => {

    // reference
    const userRef = useRef();
    const errRef = useRef();

    //state's for username, password, confirmpass, errmsg,successmsg
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    // password
    const [pass, setPass] = useState('');
    const [validpass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    //confirmpass
    const [confirmpass, setconfirmPass] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    //errmsg ,successmsg
    const [errmsg, seterrMsg] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PASS_REGEX.test(pass);
        console.log(result);
        console.log(pass);
        setValidPass(result);

        const matchpass = pass === confirmpass;
        setValidMatch(matchpass);
    }, [pass, confirmpass])

    useEffect(() => {
        seterrMsg('');
    }, [user, pass, confirmpass])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //if btn enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PASS_REGEX.test(pass);
        if (!v1 || !v2) {
            seterrMsg('invalid entry');
            return;
        }

        try {
            const response = await axios.post(REGISTER_URL,
                /* if we had save state name as username then we should pass object as follows
                JSON.stringify({user: username, pwd: pass}))
                */
                JSON.stringify({ user, pwd: pass }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response));
            //
            console.log(user, pass);
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                seterrMsg('No server Response');
            }
            else if (err.response?.status === 409) {
                seterrMsg('Username Taken');
            }
            else {
                seterrMsg.current.focus();
            }
        }
    }

    return (
        <div>
            <>
                {success ? (
                    <section>
                        <h1>Successfully Registered</h1>
                        <p>
                            <a href="#">SignIn</a>
                        </p>
                    </section>)
                    : (
                        <section>
                            <p ref={errRef} className={errmsg ? "errmsg" : "offscreen"} aria-live="assertive">
                                {errmsg}
                            </p>
                            <h1>Register</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="username">
                                    Username:
                                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type='text'
                                    id='username'
                                    ref={userRef}
                                    autoComplete='off'
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby='uidnote'
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 24 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>

                                <label htmlFor="password">
                                    Password:
                                    <FontAwesomeIcon icon={faCheck} className={validpass ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validpass || !pass ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPass(e.target.value)}
                                    value={pass}
                                    required
                                    aria-invalid={validpass ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPassFocus(true)}
                                    onBlur={() => setPassFocus(false)}
                                />
                                <p id="pwdnote" className={passFocus && !validpass ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 24 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                </p>

                                <label htmlFor="confirm_pwd">
                                    Confirm Password:
                                    <FontAwesomeIcon icon={faCheck} className={validMatch && confirmpass ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validMatch || !confirmpass ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="password"
                                    id="confirm_pwd"
                                    onChange={(e) => setconfirmPass(e.target.value)}
                                    value={confirmpass}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                />
                                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must match the first password input field.
                                </p>

                                <button disabled={!validName || !validpass || !validMatch ? true : false}>Sign Up</button>
                            </form>
                            <p>
                                Already registered?<br />
                                <span className="line">
                                    {/*add router link here*/}
                                    <a href="#">Sign In</a>
                                </span>
                            </p>
                        </section>
                    )}
            </>
        </div>
    )
}

export default Register