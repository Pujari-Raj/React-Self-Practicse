import React from 'react'

export default function List() {
    const names = ['Virat', 'MS', 'Wall', 'Sachin'];
    // const newArr = names.map( num => {     
    //     return <li> {num} </li>
    // });

    // console.log("Old Array-> ", names);
    // console.log("New Array-> ", newArr);
  
    const state = {
        users : [
            { id: 1, name : "Pujari Basvaraj", email : "abc@mail.com"},
            { id: 2, name : "Virat kohli", email : "demo@mail.com"},
            { id: 3, name : "Puneeth Rajkumar", email : "trusteduser@mail.com"},
        ],
        isLoggedin : false
    };

    {/*Creating new array newUsers and storing all values and displaying */}
    const newUsers = state.users.map(user => {
        return(
            <h1>
                ID: {user.id}  
                Name: {user.name}
                email: {user.email}
            </h1>
        );
    });
    return (
    // <div>
    //     {
    //         names.map((name) => (
    //         <li>{name}</li>
    //     ))}
    // </div>
    <div>

    <h1>
        {/*32 line can be used to display one single value*/}
        {/* ID: {state.users[0].id} Name: {state.users[0].name} email: {state.users[0].email} */}
        {newUsers}
    </h1>
    </div>
    )
}
