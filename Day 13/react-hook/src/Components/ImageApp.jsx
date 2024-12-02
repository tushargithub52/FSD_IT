import React, { useState } from 'react'
import pic from '../Images/image5.jpg'
import "./ImageApp.css"

const ImageApp = () => {

    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [rotation, setRotation] = useState(0);

  return (
    <div className='disp'>
        <div className="image">
            <img 
            src={pic} 
            style={{
                width: width,
                height: height,
                transform: `rotate(${rotation}deg)`
            }} />
        </div>
        <div className="buttons">
            <button className='btn' onClick={() => setWidth(width+10)}>Increase Width</button>
            <button className='btn' onClick={() => setWidth(width-10)}>Decrease Width</button>
            <button className='btn' onClick={() => setHeight(height+10)}>Increase Height</button>
            <button className='btn' onClick={() => setHeight(height-10)}>Decrease Height</button>
            <button className='btn' onClick={() => setRotation(rotation+30)}>Rotate Clockwise</button>
            <button className='btn' onClick={() => setRotation(rotation-30)}>Rotate Anti-Clockwise</button>
        </div>
    </div>
  )
}

export default ImageApp