import React, { useEffect } from 'react'
import CustomImages from './CustomImages'
import { useNavigate } from 'react-router-dom'

function RecipeCard({re, index}) {
  const navigate = useNavigate()

  // useEffect(()=>{

  // },[])
  return <>
     <div className="recipe-card">
       <CustomImages imgSrc={re.recipeimage.url} pt="65%"/>
       <div className="recipe-card-info">
        <img className="chef-img" src={re.authorimage.url} alt="" />
         <p className="recipe-title">{re.recipename}</p>
         <p className="recipe-desc">
          {re.recipedesc} </p>
         <button  className='view-btn' onClick={()=> navigate(`/recipesteps/${re._id}`)}> View Recipe </button>
       </div>
     </div>
  </>
}
 
export default RecipeCard