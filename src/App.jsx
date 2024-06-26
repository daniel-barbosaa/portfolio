import { BrowserRouter, Routes, Route,Navigate  } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Themes from './components/Themes'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portifolio from './pages/portifolio/Portifolio'
import Contact from './pages/contact/Contact'
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
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
   </BrowserRouter>
  )
}

export default App
