import React from 'react';
import { ChannelContext, UserContext } from "../App";

const ComponentF = () => {
  return (
    <div>
      {/* Step-3 */}
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {channel => {
                  return <div>The Context Value we got is {user} | channel context value {channel}</div>
                }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF