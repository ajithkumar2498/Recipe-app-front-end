import React from 'react'

function CustomImages({imgSrc, pt}) {
  return <>
   <div className="custom-images" style={{paddingTop:pt}}>
    <img src={imgSrc} alt="new" style={{padding:"8px", borderRadius: "10px"}}/>
    </div>
  </>
}

export default CustomImages    