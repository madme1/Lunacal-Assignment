import React from 'react'
import "./RightBox.css"
import { InnerTopBox } from './InnerTopBox'
import { InnerBottomBox } from './InnerBottomBox'

export const RightBox = () => {
  return (
    <div className='rightbox'>
        <InnerTopBox/>
        <hr />
        <InnerBottomBox/>
        <hr />
    </div>
  )
}
