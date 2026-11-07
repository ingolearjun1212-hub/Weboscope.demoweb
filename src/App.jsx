
import { Routes,Route } from "react-router-dom"



import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Manu'
import Servises from './Pages/Servises'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

function App() {

  return (
    <>  

    
    
      <div>       
        

       <Routes>

      <Route  path="/"         element={<Home/>} />
      <Route  path="/About"    element={<About/>}/>
      <Route  path="/Menu"    element={<Menu/>} /> 
      <Route  path="/Servises" element={<Servises/>} />
      <Route  path='/Gallery'  element={<Gallery/>} /> 
      <Route  path='/Contact'  element={<Contact/>} />

       </Routes>
      </div>



    </>
  )
}

export default App
