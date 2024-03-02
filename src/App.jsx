import { Route, Routes } from 'react-router-dom'
import './App.css'
import SiginUp from './component/SignUp';


function App() {


  return (
    <>
      <Routes>
        <Route path='/signup' element={<SiginUp />} />
      </Routes>
    </>
  )
}

export default App