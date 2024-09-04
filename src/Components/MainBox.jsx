import React from 'react'
import "./Mainbox.css"
import { LeftBox } from './LeftBox'
import { RightBox } from './RightBox'
export const MainBox = () => {
  return (
    <div className='mainbox'>
      <LeftBox/>
      <RightBox/>


    </div>
  )
}
