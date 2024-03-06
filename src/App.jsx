import { Route, Routes } from 'react-router-dom'
import './App.css'
import SiginUp from './component/SignUp';
import Login from './component/Login';


function App() {


  return (
    <>
      <Routes>
        <Route path='/signup' element={<SiginUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App