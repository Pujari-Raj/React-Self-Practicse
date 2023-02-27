import React, { useState } from 'react';
import '../App.css'

export default function ToggleFunctionality() {
  
  const [isVisible, setIsVisible] = useState(true);

  const handleClick =(event) =>{
    console.log('function called');
    setIsVisible(current=> !current);
  }
  return (
    <div>
        <p>Click on the button to use Toggle functionality</p>
        <button onClick={handleClick}>Click Me</button>
        {/* Click on the button to see Toggle functionality */}
        <div className={`my-class ${isVisible ?'display-block':'display-none'}`}>
            <p>Hey! I am Visible!!!!</p>
        </div>
    </div>
  )
}
