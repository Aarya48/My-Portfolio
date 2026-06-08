import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Hero,Navbar,Tech,Works,Education,StarsCanvas} from "./components"
const App = () => {
  return (
   <BrowserRouter>
   <div className="relative z-0 bg-primary">
<div className='bh-hero-pattern bg-cover bg-no repeat bg-center'>
  <Navbar/>
  <Hero/>
</div>
<About/>
<Tech/>
<Works/>
<Education/>
<div className="relative z-0">
  <Contact/>
  <StarsCanvas/>
</div>
   </div >
   </BrowserRouter>
  )
}

export default App