import React from 'react'
import "./Text.css"

export const Text = ({active}) => {
  return (
    <div className='text'>
      {
        active==="aboutme"?"This is About me Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis cupiditate sed rerum eligendi soluta quisquam accusamus, placeat voluptatibus tempora ex nesciunt similique suscipit corrupti illo iure provident quaerat officia!":active==="Experirces"?"This My Experirces cupiditate sed rerum eligendi soluta quisquam accusamus, placeat voluptatibus tempora ex nesciunt similique suscipit corrupti illo iure provident quaerat officia!":active==="Recommended"?"This is Recommended  amet consectetur adipisicing elit. Dolores debitis cupiditate sed rerum eligendi soluta quisquam accusamus, placeat voluptatibus tempora ex nesciunt similique suscipit corrupti illo iure provident quaerat officia!":null
      }
       
    </div>
  )
}
