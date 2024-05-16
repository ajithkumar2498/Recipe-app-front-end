import { faBowlRice, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import toast from "react-hot-toast";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
 
  const [authorimage, setAuthorImage] = useState();
  const [recipeimage, setRecipeImage] = useState();
  const nav= useNavigate()
  const handleAddRecipe = async (values, {resetForm}) => {
    let id = sessionStorage.getItem("id");
    try {
      const formData = new FormData();
      // Append form data
      formData.append("recipename", values.recipename);
      formData.append("authorname", values.authorname);
      formData.append("recipedesc", values.recipedesc)
      formData.append("authorimage", authorimage);
      formData.append("ingredients", values.ingredients);
      formData.append("recipeimage", recipeimage);
      formData.append("procedure", values.procedure);
      console.log(recipeimage,authorimage)
      console.log(formData)
      resetForm()
      const res = await AxiosService.post(`${ApiRoutes.addrecipe.path}/${id}`,formData,{ headers: { "Content-Type": "multipart/form-data" } } )
      // setRecipeImage('')
      // setRecipeImage('')
      if (res.status === 201) {  
        console.log("Recipe added successfully:", res.data);
        toast.success(res.data.message || "recipe added successfully");
        nav('/yourrecipes')
      } else {
        // Handle unexpected response status
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      toast.error(error.message || "server error");
    }
  };
  const InitialValues = {
    recipename: "",
    recipedesc:"",
    authorname: "",
    authorimage: "",
    ingredients: "",
    recipeimage: "",
    procedure: "",
  };
  const ValidateSchema = yup.object().shape({
    recipename: yup.string().required(),
    authorname: yup.string().required(),
    recipedesc: yup.string().required(),
    // authorimage: yup.string().required(),
    ingredients: yup.string().required(),
    // recipeimage:yup.string().required(),
    procedure: yup.string().required(),
  });
  console.log();
  
  return (
    <>
      <div className="container">
        <div className="addrecipe">
          <div className="title">
            <h3>Add Your Recipe Here</h3> <FontAwesomeIcon icon={faBowlRice} />{" "}
          </div>
          <Formik
            initialValues={InitialValues}
            validationSchema={ValidateSchema}
            onSubmit={handleAddRecipe}
          >
            {(props) => {
              return (
                <Form action="">
                  <div className="fields">
                    <label>Recipe Name :</label>{" "}
                    <input
                      type="text"
                      name="recipename"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.recipename}
                    />
                    {props.errors.recipename && props.touched.recipename && (
                      <p className="error">{props.errors.recipename}</p>
                    )}
                  </div>
                  <div className="fields">
                    <label>Recipe Description :</label>{" "}
                    <input
                      type="text"
                      name="recipedesc"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.recipedesc}
                    />
                    {props.errors.recipedesc && props.touched.recipedesc && (
                      <p className="error">{props.errors.recipedesc}</p>
                    )}
                  </div>
                  <div className="fields">
                    <label>Author Name :</label>{" "}
                    <input
                      type="text"
                      name="authorname"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.authorname}
                    />
                    {props.errors.authorname && props.touched.authorname && (
                      <p className="error">{props.errors.authorname}</p>
                    )}
                  </div>
                  <div className="fields">
                    <label htmlFor="file" className="file-upload">
                      {" "}
                      <p>upload Author Image </p>
                    </label>{" "}
                    <input
                      type="file"
                      className="file"
                      name="authorimage"
                      onChange={(e) => {
                        setAuthorImage(e.target.files[0]);
                      }}
                    />
                    {props.errors.authorimage && props.touched.authorimage && (
                      <p className="error">{props.errors.authorimage}</p>
                    )}
                  </div>
                  <div className="fields">
                    <label>Ingredients :</label>{" "}
                    <input
                      type="text"
                      name="ingredients"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.ingredients}
                    />
                    {props.errors.ingredients && props.touched.ingredients && (
                      <p className="error">{props.errors.ingredients}</p>
                    )}
                  </div>
                  <div className="fields">
                    <label htmlFor="file" className="file-upload">
                      {" "}
                      <p>upload Recipe Image </p>
                    </label>{" "}
                    <input
                      type="file"
                      className="file"
                      name="recipeimage"
                      onChange={(e) => {
                        setRecipeImage(e.target.files[0]);
                      }}
                    />
                    {props.errors.recipeimage && props.touched.recipeimage && (
                      <p className="error">{props.errors.recipeimage}</p>
                    )}
                  </div>
                  <div className="fields">
                    <label>Procedure :</label>{" "}
                    <textarea
                      name="procedure"
                      cols="30"
                      rows="10"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.procedure}
                    ></textarea>
                    {props.errors.procedure && props.touched.procedure && (
                      <p className="error">{props.errors.procedure}</p>
                    )}
                  </div>
                  <button className="btn1 add" type="submit">
                    Add Recipe <FontAwesomeIcon icon={faPlusSquare} />
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
