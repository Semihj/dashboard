import React, { useRef, useState } from 'react'
import "./AddModal.css"
import axios from 'axios'
export default function AddModal({setModal}) {
  const inputRef = useRef()
  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:""
  })
  console.log(formData)
  const handleImage = (e) => {
    e.preventDefault()
    inputRef.current.click()
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({...formData,[e.target.id]:e.target.value})
  }
  const handleAddUser = async () => {
    try {
      const res = await axios.post("/api/users/add",formData)
      console.log(res.data)
      setModal(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='modal' >
      <div className="wrapper">
        <h1>Add User</h1>
      <button className='close' onClick={() => setModal(false) } >X</button>
      <form className='form' >
     
        <div className="">
          <label htmlFor="">User Name</label>
          <input type="text" id='username' placeholder='John Doe' onChange={handleChange} />

        </div>
        <div className="">
          <label htmlFor="">Email</label>
          <input type="email" id='email' placeholder='example@gmail.com' onChange={handleChange} />

        </div>
        <div className="">
          <label htmlFor="">Password</label>
          <input type="password" id='password' placeholder='******' onChange={handleChange} />

        </div>
    
        

      </form>
      <button className='add_btn' onClick={handleAddUser} >Add User</button>
      </div>
    </div>
  )
}
