import { useEffect, useState } from 'react'
import { Link,useLocation} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import toast from 'react-hot-toast'
function Sidebar({Links, close, loginLinks, isLoggedIn}) {
  
  
  
  // useEffect(()=>{
    
  //   if(auth){
  //    setIsLoggedIn(true)
  //   }
  //   else{
  //     setIsLoggedIn(false)
  //     toast.success("logged out successful")
  //   }
    
  // })

  const location = useLocation()
  return <>
  <div className='Side-Bar' onClick={close}>
   { isLoggedIn ?   loginLinks.map((link)=>(
      <Link to={link.path} className={location.pathname === link.path ? "sidebar-links active " : "sidebar-links"}   key={link.name}>
        <FontAwesomeIcon icon={link.icon}/>
        {link.name}</Link>))
    : Links.map((link)=>(
      <Link to={link.path} className={location.pathname === link.path ? "sidebar-links active " : "sidebar-links"}   key={link.name}>
        <FontAwesomeIcon icon={link.icon}/>
        {link.name}</Link>
    ))
   }
  </div>
  </>
}

export default Sidebar