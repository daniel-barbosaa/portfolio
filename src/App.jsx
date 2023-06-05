import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Themes from './components/Themes'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Portifolio from './pages/portifolio/Portifolio'
 

function App() {

  return (
   <BrowserRouter> 
      <Navbar/>
      <Themes/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='sobre' element={<About/>}/>
        <Route path='contato' element={<Contact/>}/>
        <Route path='portfolio' element={<Portifolio/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
