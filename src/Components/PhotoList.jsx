import React from 'react'
import "./Photolist.css"

export const PhotoList = ({imglist}) => {
  return (
    <div className='photolist'>

        {imglist.map((img)=> <img src={img}alt="" />)}
       
       


    </div>
  )
}
