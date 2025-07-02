import { Routes , Route } from 'react-router-dom'

import { Home } from './pages/home/home'
import { Users } from './pages/users/users'
import { Profile } from './pages/profile/profile'
import { Login } from './pages/login/login'
import { Layout } from './components'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout />}>
            <Route index element = {<Home />}/>
            <Route path='/users' element = {<Users />}/>
            <Route path='/users/:id' element = {<Profile />}/>
            <Route path='/login' element = {<Login />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
