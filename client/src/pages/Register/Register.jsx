import React, { useState } from 'react'
import {useCookies} from "react-cookie"
import "./Register.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Register() {
  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:"",

  })
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleRegister = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/api/auth/register",formData)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='register-page' >
      <form onSubmit={handleRegister} >
        <h1 className='sign_up' >Sign Up</h1>
        <div className="">
          <label>Name</label>
          <input name='username' minLength={3} type="text" placeholder='John Doe' onChange={handleChange} />
        </div>
        <div className="">
          <label>Email</label>
          <input name='email' type="email" placeholder='example@gmail.com' onChange={handleChange} />
        </div>
        <div className="">
          <label>Password</label>
          <input name='password' type="password" minLength={6} placeholder='******' onChange={handleChange} />
        </div>
        <button className='sign_up-btn' >Sign Up</button>
       <Link to={"/login"} className="link" > <p>Have an account</p></Link>
      </form>
    </div>
  )
}
