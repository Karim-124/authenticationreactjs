import { Route, Routes } from 'react-router-dom'
import './App.css'
import SiginUp from './component/SignUp';
import Login from './component/Login';
import Hompage from './component/Hompage';
import Dashbord from './component/Dashbord';
import Users from './component/Users';
import UpdateUser from './component/UpdateUser';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Hompage />} />
        <Route path='/dashboard' element={<Dashbord />} >
          <Route exact path='users' element={<Users />} />
          <Route path="users/:id" element={<UpdateUser />} />

        </Route>
        <Route path='/signup' element={<SiginUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App