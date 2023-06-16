import React, { useEffect, useRef } from 'react'

const UseRefForm = () => {

    const inputRef = useRef(null);

    // useRef hook is used to access the dom node impreatively
    useEffect(() => {
        //focus inout element
        inputRef.current.focus();
    });
  return (
    <div>
        <input placeholder='enter name' ref={inputRef} type='text' />
    </div>  
  )
}

export default UseRefForm