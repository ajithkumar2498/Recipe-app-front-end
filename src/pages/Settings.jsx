import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Settings() {

  const [settings, setSettings] = useState({
    "--background-color:":"#fff",
    "--background-light:":"#fff",
    "--shadow-color":"rgba(0, 0, 0, 0.2)",
    "--primary-color": localStorage.getItem("PrimaryColor") ,
    " --text-color": "#0A0A0A",
    "--text-light":"#575757",
    "--font-size": localStorage.getItem("fontSizes"),
    "--animation-speed":localStorage.getItem("animationSpeed") 
  })
  useEffect(()=>{
     const root = document.documentElement
     for(let key in settings){
      root.style.setProperty(key, settings[key])
     }
     
     
  },[settings])
  const [theme, setTheme]=useState("light")
  const themes = [
    {
      "--background-color":"#fff",
      "--background-light":"#fff",
      "--shadow-color":"rgba(0, 0, 0, 0.2)",
     " --text-color": "#0A0A0A",
      "--text-light":"#575757",
    },
    {
      "--background-color":"rgb(29, 29, 29)",
      "--background-light":"rgb(77, 77, 77)",
      "--shadow-color":"rgba(0, 0, 0, 0.2)",
     " --text-color": "#fff",
      "--text-light":"#eceaea",
    },
  ]
   function changeTheme(i){
     const _theme =  {...themes[i]}
     setTheme( i === 0 ? "light" : "dark")
     //updateSettings
     let _settings = {...settings}
     for(let key in _theme){
       _settings[key] = _theme[key]
     }
     setSettings(_settings)
   }

   function changeColor(i){
     const _color = primaryColors[i]
     const _settings = {...settings}
     _settings["--primary-color"] = _color
     setSettings(_settings)
      setPrimaryColor(i)
      console.log(i)
      console.log(_settings)
      window.localStorage.setItem("primaryColors",i)
      window.localStorage.setItem("PrimaryColor",_color)
    }
   
   function changeFontSize(i){
    const _size = fontSizes[i]

    const _settings = {...settings}
    _settings["--font-size"] = _size.value
    setFontSize(i)
      setSettings(_settings)
      window.localStorage.setItem("fontSize",i)
      window.localStorage.setItem("fontSizes",_size.title)
  }
  function changeAnimationSpeed(i){
    const _speed = animatonSpeeds[i]
    console.log(_speed.title)
    const _settings = {...settings}
    _settings["--animation-speed"] = _speed.value
    setAnimationSpeed(i)
   setSettings(_settings)
      window.localStorage.setItem("animationSpeed",i)
      window.localStorage.setItem("animationSpeeds",_speed.title)
   
  }

  const primaryColors =[
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 300, 83)",
    "rgb(156, 39, 176)",
  ]
  const fontSizes=[
    {
      title:"Small",
      value:"12px"
    },
    {
      title:"Medium",
      value:"16px"
    },
    {
      title:"Large",
      value:"20px"
    },
  ]
  const animatonSpeeds=[
    {
      title:"Slow",
      value:2,
    },
    {
      title:"Medium",
      value:1,
    },
    {
      title:"Fast",
      value:.5,
    }
  ]
  const [primaryColor, setPrimaryColor]= useState(0)
  const [fontSize, setFontSize]= useState(1)
  const [animatonSpeed, setAnimationSpeed]=useState(1)
  
  return <>
    <div className="section d-block">
      <h2>Primary Theme</h2>
      <div className="options-container">
         <div className="option light" onClick={()=> changeTheme(0)}>          
            {theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
            )}
         </div>
         <div className="option dark" onClick={()=> changeTheme(1)}>
          {theme === "dark" && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              )}
         </div>
        
      </div> 
    </div>
    <div className="section d-block">
      <h2>Preferred Color</h2>
      <div className="options-container">
                 {primaryColors.map((color, index)=>(
                  
                <div className="option light" key={index} style={{backgroundColor: color}} onClick={()=>changeColor(index) }>      
                {primaryColor == index && (
                  <div className="check">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                ) }
            </div>
          ))}
      </div>
    </div>
    <div className="section d-block">
      <h2>Font Size</h2>
      <div className="options-container">
            {fontSizes.map((size, index)=>(
              <button key ={index} className='btn1' onClick={()=> changeFontSize(index)}>
                  {size.title}
                  {fontSize === index && <span><FontAwesomeIcon icon={faCheck}/></span>}
              </button>
          ))}
      </div>
    </div>
    <div className="section d-block">
      <h2>Animation Speed</h2>
      <div className="options-container">
            {animatonSpeeds.map((speed, index)=>(
              <button key={index} className='btn1' onClick={()=> changeAnimationSpeed(index)}>
                  {speed.title}
                  { animatonSpeed === index && <span><FontAwesomeIcon icon={faCheck}/></span>}
              </button>
          ))}
      </div>
    </div>
   
  
  </>
}

export default Settings