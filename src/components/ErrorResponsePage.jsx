import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorResponsePage() {
    const navigate = useNavigate()
  return <>
       <div className='error-container'>
        <p> No Recepies Found For You.....</p>
         <button className='btn1' onClick={()=> navigate('/addrecepies')}>Add Your Recipe Here <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
       </div>
  </>
  
  
}

export default ErrorResponsePage