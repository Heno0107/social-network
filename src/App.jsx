import { Routes , Route } from 'react-router-dom'

import { Home } from './pages/home/home'
import { Users } from './pages/users/users'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/users' element = {<Users />}/>
      </Routes>
    </>
  )
}

export default App
