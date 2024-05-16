import { Link,useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { faBowlFood, faGear, faHome, faPlusSquare, faUser} from "@fortawesome/free-solid-svg-icons"
import toast from 'react-hot-toast'
import { faBowlRice } from '@fortawesome/free-solid-svg-icons/faBowlRice'



function Navbar() {
    const location = useLocation()
    const auth = sessionStorage.getItem("token")
    const [showSideBar, setShowSideBar]=useState(false)
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    
    const Links = [
      {
        name:"HOME",
        path:"/home",
        icon:faHome
      },
      {
        name:"RECEPIES",
        path:"/recepies",
        icon:faBowlFood
      },
      {
        name:"ADD YOUR RECIPE",
        path:"/signup",
        icon:faPlusSquare
      },
      {
        name:"SETTINGS",
        path:"/settings",
        icon:faGear
      }
    ]
    const loginLinks = [
      {
        name:"HOME",
        path:"/home",
        icon:faHome
      },
      {
        name:"RECEPIES",
        path:"/recepies",
        icon:faBowlFood
      },
      {
        name:"ADD RECIPE",
        path:"/addrecepies",
        icon:faPlusSquare
      },
      {
        name:"YOUR RECIPES",
        path:"/yourrecipes",
        icon:faBowlRice
      },
      {
        name:"PROFILE",
        path:"/profile",
        icon:faUser
      },
      {
        name:"SETTINGS",
        path:"/settings",
        icon:faGear
      }
    
    ]
     useEffect(()=>{
       if(auth){
        setIsLoggedIn(true)
       }
       else{
        setIsLoggedIn(false)
        toast.success("logged out successful")
       }
       
     },[auth])
    function closeSideBar(){
      setShowSideBar(false)
    }
  return <>
   <div className="nav-bar container">
     <Link to='/home' className='logo'>R<span>ec</span>epies Zone</Link>
     <div className="nav-links">
     {isLoggedIn? loginLinks.map((link) =>(
          <Link className={location.pathname === link.path ? "active" : " "} to={link.path} key={link.name}>{link.name}</Link>
        )) :
        Links.map((link) =>(
          <Link className={location.pathname === link.path ? "active" : " "} to={link.path} key={link.name}>{link.name}</Link>
       ))} 
     </div>
    <div onClick={()=> {setShowSideBar(true); auth ? setIsLoggedIn(true) :setIsLoggedIn(false)} } className={showSideBar ? "sidebar-Icon active" : "sidebar-Icon"}>
        <div className="bar"> </div>
        <div className="bar"> </div>
        <div className="bar"> </div>
    </div>
   </div>
   { showSideBar && <Sidebar close={closeSideBar} Links={Links} authh = {auth} loginLinks={loginLinks} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> }
   
  </>
}

export default Navbar