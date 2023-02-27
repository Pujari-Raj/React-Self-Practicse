import React from 'react'

export default function Messages(props) {
    const outboxMessages = props.outboxMessages;
    if (outboxMessages.length > 0) {
        return (
            <><h2>You have {outboxMessages.length} Tasks for Today</h2>
                <h3>The outbox messages are: </h3>
                <ul>
                    <li>{outboxMessages[0]}</li>
                    <li>{outboxMessages[1]}</li>
                    <li>{outboxMessages[2]}</li>
                </ul>
            </>
        );
    }
    else {
        return <p>no Task for today</p>
    }
}