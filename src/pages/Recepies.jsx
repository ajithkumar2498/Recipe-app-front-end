import React, { useEffect, useState } from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { ClipLoader } from 'react-spinners'
function Recepies() {
  const [loader, setLoader]=useState(true)
  const [color, setColor]=('FF0080')
 const [recipes, setRecipes]=useState([])
  useEffect(()=>{
    const fetchRecipes= async ()=>{
      const res = await AxiosService.get(`${ApiRoutes.getallrecipe.path}`)
      if(res.status===200){
        console.log(res)
        setRecipes(res.data.recipes)
        setLoader(false)
      }
    }
   fetchRecipes()
  },[])
 
  return <>
    <PreviousSearches/>
    <div className="recepies-container">
      { loader ? <div className="loader" style={{textAlign:'center', marginBottom:"20em"}}> <ClipLoader loading={loader} color = {color} size={80} aria-label="Loading Spinner" height={80} data-testid="loader" /></div> :
        recipes.map((re, index)=>(
          <RecipeCard key={index} re={re}/>
        
        ))
      }
        
    </div>
  </>
}

export default Recepies