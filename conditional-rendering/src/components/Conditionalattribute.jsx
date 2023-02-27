import React from 'react'

export default function Conditionalattribute() {

    let disabled = false;
    let type = "text";
    let name = "name";

    const user = {
        role: "Employee",
        name: "Pujari"
    }

    /* If the user role is equal to the student, then the text box is disabled, 
    as it is an employee so we can write the name. */
    if (user.role === "Employee") {
        disabled = true;
    }
  return (
    
    <div>
        <p>Write Anything if you're student</p>
        <input type="text" name={name} id="" disabled={disabled} />
        <p>name: {user.name}</p>
    </div>
  )
}
