import React, { useEffect, useState } from 'react'

const HookEffectMouse = () => {

    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

    const logMousePstn = e =>{
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);       
    }

    /* If we mention blank array after the call back functn in useEffect then react,
    It will call useEffect code only once , and the rest of content on updating */
    
    /* If we want to specify blank dependency array then it should not be specify there */
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePstn);

        return () => {
            console.log('component unmounting');
            window.removeEventListener('mousemove', logMousePstn)
        }
    }, []);

  return (
    <div>
        Hook X -{x} Y- {y}
    </div>
  )
}

export default HookEffectMouse