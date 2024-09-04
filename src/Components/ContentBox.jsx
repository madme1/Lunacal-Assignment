import React from 'react'
import "./ContentBox.css"
import { ButtonBar } from './ButtonBar'
import { Text } from './Text'
import { useState } from 'react'

export const ContentBox = () => {
  const [active, setactive] = useState("aboutme");
  return (
    <div className='contentbox'>
        <ButtonBar active={active} setactive={setactive}/>
        <Text active={active}/>
        </div>
  )
}
