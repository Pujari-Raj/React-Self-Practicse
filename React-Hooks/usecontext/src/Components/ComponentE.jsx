import React, { useContext } from 'react';
import ComponentF from "./ComponentF";
import { UserContext,ChannelContext } from "../App";

const ComponentE = () => {

  /* If We compare the code in componentF file of using context 
    It's very much easier to use context using useContext hook 
  */
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext); 

  return (
    <div>
      {/* accessing context value */}
      {user} | {channel}
    </div>
  )
}

export default ComponentE;