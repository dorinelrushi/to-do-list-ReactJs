import React from 'react'

function UsersList(props) {
  return (

     <ul>

        {props.users.map((user)=>(
           
             <li  key={user.id}>
                
              {user.name} ({user.age} years old)
            </li>
           
        ))}
        

        </ul>
  )
}

export default UsersList
