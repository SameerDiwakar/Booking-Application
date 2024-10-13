import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './Components/IndexPage'
import LoginPage from './Components/LoginPage'
import Layout from './Layout'
import RegisterPage from './Components/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import AccountPage from './Components/AccountPage'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={< LoginPage />} />
        <Route path='/register' element={< RegisterPage />} />
        <Route path='/account' element={<AccountPage/>}/>
        <Route path='/account/:subpage' element={<AccountPage/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App