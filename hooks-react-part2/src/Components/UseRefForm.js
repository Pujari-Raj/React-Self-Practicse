import React, { useEffect, useRef } from 'react'

const UseRefForm = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        //
        inputRef.current.focus();
    });
  return (
    <div>
        <input placeholder='enter name' ref={inputRef} type='text' />
    </div>  
  )
}

export default UseRefForm