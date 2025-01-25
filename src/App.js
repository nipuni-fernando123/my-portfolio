import React from "react"
import { BrowserRouter  , Routes , Route } from "react-router-dom"

import Home from './Pages/Home'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from "./Pages/Contact"

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route  path='my-portfolio/' element={<Home/>}></Route>
        <Route path='my-portfolio/about' element={<About/>}></Route>
        <Route path='my-portfolio/projects' element={<Projects/>}></Route>
        <Route path='my-portfolio/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
