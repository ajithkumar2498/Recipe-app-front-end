import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import AxiosService from "../utils/AxiosService.jsx"
import ApiRoutes from '../utils/ApiRoutes.jsx'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,  faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { Formik, Form } from 'formik'
import * as yup from "yup"
function LoginPage() {
    const navigate = useNavigate()

	useEffect(()=>{
       sessionStorage.clear()
	},[])
	const handleLogin = async (values, helpers)=>{
		// console.log(values)
		// console.log(helpers)
	  try {
		let formData = {...values}
		// let data = Object.fromEntries(formData)
		let res = await AxiosService.post(ApiRoutes.LOGIN.path, formData) 
			if(res.status === 200){
				sessionStorage.setItem('token', res.data.token)
				sessionStorage.setItem('role', res.data.role)
				sessionStorage.setItem('name', res.data.name)
				sessionStorage.setItem('email', res.data.email)
				sessionStorage.setItem('id', res.data.id)
				toast.success(res.data.message)
				if(res.data.role === "user"){
                    navigate('/home')
				}else{
					navigate(`/profile/${res.data.id}`)
				}
			}
	      } catch (error) 
		  {
		    toast.error(error.response.data.message || "server error")
	      }
	}
	const InitialValues = {
		email:"",
		password:""
	}
	const ValidateSchema = yup.object().shape({
		
		email: yup.string().email().required(),
		password: yup.string().required()
	})
  return <>
		<div className="container">
			<div className="container-login">
				<Formik initialValues={InitialValues} validationSchema={ValidateSchema} onSubmit={handleLogin}>
				 {(props)=>{
	
					return(
						<Form className="login100-form validate-form">
						<span className="header">
								Login
						</span>
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
						<div className="button">
							<button className="btn1" type='submit'>
							Login
							<FontAwesomeIcon icon={faSignInAlt}/>
							</button>
						</div>
						<div className="link">
							<Link to='/signup' className="txt2" >
								Create your Account
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

export default LoginPage