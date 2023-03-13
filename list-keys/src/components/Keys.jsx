import React from 'react'

export default function Keys() {

    const state = {
        users: [
            {id: 1, name : "Pujari Basvaraj", email : "abc@mail.com"},
            {id: 2, name : "Pujari Basvaraj", email : "abc@mail.com"},
            {id: 3, name : "Pujari Basvaraj", email : "abc@mail.com"} 
        ]
    };
  
    const newUsers = state.users.map((user => {
        return(
            <h1 key={user.id}>
                ID: {user.id}
                Name: {user.name}
                email: {user.email}
            </h1>
        );
    }));
 
    return (
        <div>
            {newUsers}
        </div>
    )
}
