import { faArrowLeft, faSpoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import toast from "react-hot-toast";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners";

function RecepieDetails() {
  const auth = sessionStorage.getItem("token")
  const [recipe, setRecipe]=useState(null)
  const [ingredients, setIngredients] = useState('')
  const [procedure, setProcedure]=useState([])
  const [loader, setLoader]=useState(true)
  const {id} = useParams()
  useEffect(()=>{
    setTimeout(()=>{
      const fetchRecipe = async () => {
        try {
          const res = await AxiosService.get(`${ApiRoutes.getRecipeById.path}/${id}/rp`)
          // console.log(res)
          if(res.status===200){
            setRecipe(res.data.recipe);
            setLoader(false)
            // procedure =  res.data.recipe.procedure
            const ing = res.data.recipe.ingredients[0].split(',')
            setIngredients(ing)
            console.log(ing)
            // setProcedure(procedure.split('.'))
            toast.success(`${res.data.recipe.recipename} recipe is here`, {icon:"🍛"})
          }else{
            throw new Error("Unexpected response from server");
          }
        } catch (error) {
          console.error('Error fetching recipe:', error);
        }
      };
    fetchRecipe();
    },5000)
   console.log(ingredients)
  },[id])
  const navigate = useNavigate()
  return <>
    <div className="recipe-container">
      {loader ? <>      
      <div className="loader" style={{textAlign:'center',margin:'10em'}}> 
      <ClipLoader loading={loader} size={80} aria-label="Loading Spinner" height={80} data-testid="loader" />
      </div> </>   : recipe ?    <>
      <button className="btn1 " onClick={()=> auth ? navigate('/yourrecipes') : navigate('/recipies')}><FontAwesomeIcon icon={faArrowLeft} className="back-icon"></FontAwesomeIcon></button>
       <div className="recipe-image">
        <img src={recipe.recipeimage.url} alt="" />
        <div className="chef-image">
        <img src={recipe.authorimage.url} alt="" />
        <div className="recipe-name">
          {recipe.recipename}
        </div>
        </div> 
      </div>
       <div className="Procedures">
        <div className="ingredients">
          <span>Ingredients</span>
          {ingredients.map((ingredient, index) =>{ return (<ul className="ingredient" key={index} >
                <li> <FontAwesomeIcon className="fa"icon={faSpoon}/> {ingredient}{console.log(ingredient)}</li>
              </ul>)
            })}
        </div>
        <div className="Instructions">
        <span>Instructions</span>
           <ul className="instruction">
            <li>{recipe.procedure}</li>
            {/* <li>hii</li>
            <li>hii</li>
            <li>hii</li>
            <li>hii</li>
            <li>hii</li>
            <li>hii</li>
            <li>hii</li>
            <li>hii</li> */}
           </ul>
        </div>
       </div>
      </> : <><div><p>Recipe not found</p></div></>}
   
     
    </div>
  </>
}

export default RecepieDetails
