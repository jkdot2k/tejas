import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState() 
  const navigateTo = useNavigate()

  const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/api/auth/login", {email,password})
        .then(result => {console.log(result)
          navigateTo("/")
        })
        .catch(err =>console.log(err))    
}

  return (
    <>
    <form onSubmit={handleSubmit} className='flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='prata-regular text-3xl'>Login</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        <input type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' onChange={(e)=> setEmail(e.target.value)} required />
        <input type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' onChange={(e)=> setPassword(e.target.value)} required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer '>Forget Password</p>
          <Link to='/signup' >
          <p className=' cursor-pointer '>Create an account</p> 
          </Link>
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-2'>Login</button>
    </form>
    </>
  )
}

export default Login