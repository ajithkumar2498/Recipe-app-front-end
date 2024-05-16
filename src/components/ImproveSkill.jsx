import { useNavigate } from "react-router-dom"


function ImproveSkill() {
    const auth = sessionStorage.getItem('token')
   const navigate =useNavigate()
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know Nutrition facts",
        "Get cooking tips",
        "Get Ranked"
    ]
  return <>
  <div className="section improve-skills">
              <div className="col img">
               <img src="/images/recepies/image_11.jpg" alt="" />
               </div>
            <div className="col typography">
                <h1 className="title"> Improve Your Culinary Skills</h1>
                {list.map((item,index)=>( 
                 <p className='skill-items' key={index}> {item}</p>
                 ))}
                <button className="btn1" onClick={()=> auth ? navigate('/yourrecipe'):navigate('/signup')}>Add Your Recipe</button>
            </div>

    
        </div> 
  </>
}

export default ImproveSkill