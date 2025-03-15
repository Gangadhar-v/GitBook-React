
import LaunchComponent from './pages/LaunchPage'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GitProfile from './pages/GitProfile';
function App() {
  

  return (
    <>
    <BrowserRouter>
   
  <Routes>
    <Route path='/' element={<LaunchComponent/>}></Route>
    <Route path='/profile/:username' element={<GitProfile/>}></Route>
  </Routes>
      </BrowserRouter>
    </>
  )
  
}

export default App