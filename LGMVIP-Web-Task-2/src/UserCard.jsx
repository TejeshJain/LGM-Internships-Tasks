import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="user-card" style={{padding:"22px", border:"1px solid white", borderRadius:"5px"}}>
      <img src={user.avatar} alt={user.first_name} />
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>{user.email}</p>
    </div>
  )
}

export default UserCard