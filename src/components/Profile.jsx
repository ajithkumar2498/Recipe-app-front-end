import React, { useEffect } from 'react'
import useLogout from "../components/hooks/useLogout.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

function Profile() {
   const name= sessionStorage.getItem('name')
   const email= sessionStorage.getItem('email')

  const logout= useLogout()
  return <>
   <div className="container">
     <div className="profile-container">
      <h3 className="title">My Profile</h3>
      <div className="image">
        <img src="/images/profile.jpg" alt="" />
      </div>
      <hr />
       <div className="details">
        <p className="name">Name: {name}</p>
        <p className="email">Email: {email}</p>
       </div>
       <button className="btn1 logout" onClick={()=> logout()}> logout <FontAwesomeIcon icon={faSignOut}/></button>
     </div>
   </div>

  </>
}

export default Profile