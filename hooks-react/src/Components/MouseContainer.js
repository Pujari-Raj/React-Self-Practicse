import React, { useState } from 'react'
import HookEffectMouse from './HookEffectMouse';

const MouseContainer = () => {
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>toggle display</button>
        {display && <HookEffectMouse/> }
    </div>
  )
}

export default MouseContainer