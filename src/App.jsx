import { useState } from 'react'

import './App.css'
import { MainBox } from './assets/Components/MainBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <MainBox/>
  
    
    </div>
  )
}

export default App
