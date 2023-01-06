import React, { useEffect, useState } from "react";
import { useSelector,useDispatch  } from "react-redux";
import { addUser, deleteUser, updateUser } from "./app/Users";

function App() {
  const usersData = useSelector((state) => state.users.value);
  const [name,setName]=useState("");
  const [newName,setNewName]=useState("");
  const dispach=useDispatch();
  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

  return (
    <div className="App">
      <div>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="firstName " />
       
        <button disabled={!name} onClick={()=>{dispach(addUser({id:getRandomInt(10),name}));setName("")}}>Add User</button>
      </div>

      <div>
        {usersData.map((user, i) => {
          return (
            <div className="card" key={i}>
              <h1> {user.id} {user.name} </h1>
              <input onChange={(e)=>{setNewName(e.target.value)}}  type="text" name="" id="" />
              <button onClick={()=>{dispach(updateUser({id:user.id,newName}))}}>update</button>
              <button onClick={()=>dispach(deleteUser({id:user.id}))}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
