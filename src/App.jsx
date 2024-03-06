

import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Registration from './components/Registration'


function App() {


  return (

  <BrowserRouter>

<Routes>
<Route path='/' element={<Header/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/registration' element={<Registration/>}/>
</Routes>



  </BrowserRouter>

  )
}

export default App
