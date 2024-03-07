import { Route, Routes } from 'react-router-dom'
import './App.css'
import SiginUp from './component/SignUp';
import Login from './component/Login';
import Hompage from './component/Hompage';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Hompage />} />
        <Route path='/signup' element={<SiginUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App