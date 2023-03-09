import React, { useEffect, useState } from 'react'
import HOC from './HOC';

const UserList = ({data}) => {

    // const [users, setUsers] = useState([]); 
    // const [searchuser, setSearchUser] = useState("");

    // useEffect(()=>{
    //     const fetchUsers = async ()=> {
    //       const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //       const userlist = await res.json();
    //       setUsers(userlist);
    //       console.log(userlist);
    //     };
    //     fetchUsers();
    // }, []);

    let renderUsers = data.map((user) => {
     return(
      <div key={user.id}>
        <p>{user.name}</p>
      </div>
     ); 
    })

    // let filteredUsers = users.filter(({name}) => {
    //   return name.indexOf(searchuser) >=0;
    // }).map((user) => {
    //   return(
    //    <div key={user.id}>
    //      <p>{user.name}</p>
    //    </div>
    //   ); 
    //  })

  return (
    <div>
      <h3>Users List</h3>
      {/* <input type="text" value={searchuser} placeholder="search User"
      onChange={(e) => setSearchUser(e.target.value)} /> */}

      {/* <div> {filteredUsers} </div>   */}
      <div>{renderUsers}</div>
    </div>
  )
};

const SearchUsers = HOC(UserList, "users");

export default SearchUsers;