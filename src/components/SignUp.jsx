import login from "../../public/images/recepies/image_12.jpg"
// import "../styles/loginpage.css"
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import AxiosService from "../utils/AxiosService.jsx"
import ApiRoutes from "../utils/ApiRoutes.jsx"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faEnvelope, faLock, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons"
import { Formik, Form } from 'formik'
import * as yup from "yup"
function SignUp() {
	const navigate = useNavigate()

	useEffect(()=>{
       sessionStorage.clear()
	},[])
	const handleSignUp = async (values, helpers)=>{
	
		try {
		  let formData = {...values}
		  console.log(formData)
		  let res = await AxiosService.post(ApiRoutes.SignUp.path, formData)
			  if(res.status === 201){
				  toast.success(res.data.message)
				  navigate('/login')
				 }
			} catch (error) 
			{
			  toast.error(error.response.data.message || error.message)
			}
	  }
	  const InitialValues = {
		name:"",
		email:"",
		password:"",
		confirmpassword:""
	}
	const ValidateSchema = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().required(),
		confirmpassword: yup.string().required()
	})
  return <>
		<div className="container">
			<div className="container-login">
                    <Formik initialValues={InitialValues} validationSchema={ValidateSchema} onSubmit={handleSignUp} >
						{(props)=>{
							return(
								<Form className="login100-form validate-form" >
								<span className="header">
								Sign Up
								</span>
								<div className="name" >
									<span className="symbol-input100">
										<FontAwesomeIcon icon={faUser}/>
									</span>
									<input className="input100" type="text" name="name" placeholder="Name" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.name}/>
									{props.errors.name && props.touched.name &&(
                                     <p className="error">{props.errors.name}</p>
								)}
								</div>
		
								<div className="email" >
									<span className="symbol-input100">
										<FontAwesomeIcon icon={faEnvelope}/>
									</span>
									<input className="input100" type="text" name="email" placeholder="Email" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.email}/>
									{props.errors.email && props.touched.email &&(
                                     <p className="error">{props.errors.email}</p>
								)}
								</div>
								<div className="password" >
									<span className="symbol-input100">
										<FontAwesomeIcon icon={faLock}/>
									</span>
									<input className="input100" type="password" name="password" placeholder="Password" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.password}/>
									{props.errors.password && props.touched.password &&(
                                     <p className="error">{props.errors.password}</p>
								)}
								</div>
		
								<div className="password" >
									<span className="symbol-input100">
										<FontAwesomeIcon icon={faLock}/>
									</span>
									<input className="input100" type="password" name="confirmpassword" placeholder="Confirm Password" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.confirmpassword}/>
									{props.errors.confirmpassword && props.touched.confirmpassword &&(
                                     <p className="error">{props.errors.confirmpassword}</p>
								)}
								</div>
								
								<div className="container-login100-form-btn">
									<button className="btn1" type="submit">
										sign up
										<FontAwesomeIcon icon={faSignIn}/>
									</button>
								</div>
								<div className="link">
									<Link to='/login' className="txt2" >
										Login
										<FontAwesomeIcon icon={faArrowRight}/>
									</Link>
								</div>
							</Form>
							)
						}}
				
					</Formik>
				</div>
			</div>
     </>
}

export default SignUp