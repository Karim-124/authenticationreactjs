import { Route, Routes } from 'react-router-dom'
import './App.css'
import SiginUp from './component/SignUp';
import Login from './component/Login';
import Hompage from './component/Hompage';
import Dashbord from './component/Dashbord';
import Users from './component/Users';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Hompage />} />
        <Route path='/dashboard' element={<Dashbord />} >
          <Route path='users' element={<Users />} />
        </Route>
        <Route path='/signup' element={<SiginUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App