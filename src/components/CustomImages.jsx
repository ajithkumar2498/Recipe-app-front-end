import React from 'react'

function CustomImages({imgSrc, pt}) {
  return <>
   <div className="custom-images" style={{paddingTop:pt}}>
    <img src={imgSrc} alt="new" />
    </div>
  </>
}

export default CustomImages    