import React, {useState} from 'react';
import style from './style.js'

export default function But(){

  const [hover, setHover] = useState(false);

  return(
    <button style={{borderColor:"#00000000"}}
      onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
      }}
      style={{
        ...style.normal,
        ...(hover ? style.hover : null)
      }}>

        MyButtonText

    </button>
  )
}