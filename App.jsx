import { useState } from 'react'

import './App.css'
import ColurChanger from './assets/ColurChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <ColurChanger/>
    
    </>
  )
}

export default App
