import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout'
import View from './Components/View'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     
     <Routes>

     <Route path="/" element={<Layout/>}>
     <Route path="/" index element={<View/>}/>
  




    </Route>


     </Routes>
     
     
     </BrowserRouter>
    </>
  )
}

export default App
