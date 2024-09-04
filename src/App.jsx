import { useState } from 'react'

import './App.css'
import { MainBox } from './Components/MainBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <MainBox/>
  
    
    </div>
  )
}

export default App
