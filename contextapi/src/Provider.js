import React, { useState } from "react";

import packageContext from './Context';

// Provider - It basically provides the data which we need to pass.
const Provider = props =>{
    const [mission, setMission] = useState({
        mName : "Elimnate the Enemies",
        agent : "agentpujari",
        status: "Not Compeleted"
    });

    return(
        <packageContext.Provider value={{
            data: mission,
            isMissionCompleted: () => {
                setMission({...mission, status: "DONE & DUSTED"});
            }
        }}>
            {props.children}
        </packageContext.Provider>
    )
}

export default Provider;