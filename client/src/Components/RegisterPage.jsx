import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

 const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const registerUser = async (ev) => {
    ev.preventDefault()
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registration Successful. Now you can log in')
    } catch (e) {
      alert('Registration Failed. Please Try again Later')
      console.log(e)
    }
  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className="mb-64">
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto' onSubmit={registerUser}>
          <input type="text"
            placeholder='John Doe'
            value={name}
            onChange={ev => setName(ev.target.value)} />
          <input type="email" placeholder='your@email.com'
            value={email}
            onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
            placeholder='password'
            value={password}
            onChange={ev => setPassword(ev.target.value)} />
          <button className='primary'>Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member? <Link className='text-black underline' to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
