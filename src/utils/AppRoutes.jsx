import LoginPage from "../components/LoginPage";
import SignUp from "../components/SignUp";
import Profile from "../components/Profile";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AdminGuard from "./AdminGuard";
import UserGuard from "./UserGuard";
import HomePage from "../pages/HomePage";
import Recepies from "../pages/Recepies";
import Settings from "../pages/Settings";
import { faRightToBracket, faFloppyDisk, faGear, faPlus, faCog, faBowlFood} from "@fortawesome/free-solid-svg-icons"

const AppRoutes = [
  
    {   
        path:'/login',
        element:<LoginPage/>
    },
    {    
        path:'/home',
        element:<HomePage/>
    },
    {   
        path:'/signup',
        element:<SignUp/>
    },
    {   
        path:'/recepies',
        element:<Recepies/>
    },
    {   
        path:'/settings',
        element:<Settings/>
    },
    {
        path:'/dashboard',
        element:<AdminGuard>
                    <Dashboard/>
                </AdminGuard>
    },
    {   
        path:'/profile/:id',
        element:<UserGuard><Profile/></UserGuard>
    },
    {   
        path:'*',
        element:<Navigate to='/home'/>
    }
]


export default AppRoutes
    