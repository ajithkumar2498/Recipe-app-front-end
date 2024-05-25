import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosService from "../utils/AxiosService.jsx";
import ApiRoutes from "../utils/ApiRoutes.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

function YourRecipe() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = "FF0080";

  useEffect(() => {
    // Retrieve user ID from session storage
    const storedUserId = sessionStorage.getItem("id");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);
  useEffect(() => {
    if (userId) {
      setTimeout(() => {
        const fetchRecipes = async () => {
          try {
            const response = await AxiosService.get(
              `${ApiRoutes.getrecipeByUserId.path}/${userId}/recipes`
            );
            if (response.status === 200) {
              setIsLoading(false);
              setRecipes(response.data.recipes);
            }
            if (recipes == null) {
              navigate("/add");
            }
          } catch (error) {
            console.error("Error fetching recipes:", error);
            setIsLoading(false);
            navigate("/add");
          }
        };
        fetchRecipes();
      }, 1000);
    }
  }, [userId]);
  const handleDeleteRecipe = async (recipeId) => {
    alert("did you want to delete your recipe")
    try {
      let res = await AxiosService.delete(
        `${ApiRoutes.deleterecipe.path}/${recipeId}`
      );
      if (res.status === 200) {
        setRecipes(recipes.filter((recipe) => recipe._id !== recipeId));
        toast.success("recipe deleted successful");
        if (recipes.length === 0) {
          navigate("/add");
        }
      } else {
        toast.error("error in deletion");
      }
    } catch (error) {
      toast.error(error.message || "internal server error");
    }
  };

  return (
    <>
      <div className="your-recipe">
        {isLoading ? (
          <div
            className="loader"
            style={{
              textAlign: "center",
              marginBottom: "10em",
              marginTop: "10em",
            }}
          >
            <ClipLoader
              loading={isLoading}
              color={color}
              size={80}
              aria-label="Loading Spinner"
              height={80}
              data-testid="loader"
            />
          </div>
        ) : (
          recipes.map((recipe) => (
            <div className="recipe-card" key={recipe._id}>
              <img
                src={recipe.recipeimage.url}
                className="recipe-image"
                alt="recipe"
              />
              <div className="recipe-card-info">
                <img
                  className="chef-img"
                  src={recipe.authorimage.url}
                  alt="chef"
                />
                <p className="recipe-title">{recipe.recipename}</p>
                <p className="recipe-desc">{recipe.recipedesc} </p>
                <FontAwesomeIcon
                  icon={faEdit}
                  className="svg"
                  onClick={() => navigate(`/updaterecepies/${recipe._id}`)}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="svg"
                  onClick={() => handleDeleteRecipe(recipe._id)}
                ></FontAwesomeIcon>
                <button
                  className="view-btn"
                  onClick={() => navigate(`/recipedetails/${recipe._id}`)}
                >
                  {" "}
                  View Recipe{" "}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default YourRecipe;
