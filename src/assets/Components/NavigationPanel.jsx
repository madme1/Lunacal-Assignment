import React, { useState } from 'react'
import "./NavigationPanel.css"
export const NavigationPanel = ({setimglist,imglist}) => {


  const [Value,setvalue]=useState("");
  const [visibility,setvisibility]=useState(false)

  function upload(){


      setimglist([...imglist,Value]);
      setvalue("")
    
      setvisibility(false);

    
  }
  return (
    <div className='navpanel'>
        <button className='gbtn'>Gallery</button>
        <button className='addbtn'onClick={()=>setvisibility(true)}>+ADD IMAGE</button>
        <i className="fa-solid fa-arrow-left"></i>
        <i className="fa-solid fa-arrow-right"></i>

        <div className={visibility==true?"input   visible":visibility==false?"input hide":null}>

          <p>Paste the Image Link</p>
           <input type="text" value={Value} onChange={(event)=>setvalue(event.target.value)}/>
        <button onClick={upload}>Upload</button>
        <button onClick={()=>setvisibility(false)}>cancel</button>

        </div>
       

    </div>
  )
}
