import React from 'react'
import "./InnerTopBox.css"
import { IconBox } from './IconBox'
import { ContentBox } from './ContentBox'

export const InnerTopBox = () => {
  return (
    <div className='innertop'>
        <IconBox/>
        <ContentBox/>
        <hr />
        </div>
  )
}
