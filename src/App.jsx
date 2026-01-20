import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Movies from './componenet/Movies'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Detail from './componenet/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/movies' element={<Movies />}></Route>
      <Route path='/detail/:id' element={<Detail />}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
