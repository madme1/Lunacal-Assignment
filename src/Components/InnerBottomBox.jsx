import React from 'react'
import "./InnerBottomBox.css"
import { IconBox } from './IconBox'
import { ContentBox } from './ContentBox'
import { Photobox } from './Photobox'

export const InnerBottomBox = () => {
  return (
    <div className='innerbottom'>
      <IconBox/>
      
      <Photobox/>
    </div>
  )
}
