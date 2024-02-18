import React, { useEffect, useState } from 'react'
import "./Verify.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Verify() {
const [secretKey, setSecretKey] = useState("")
const navigate = useNavigate()

  const handleVerify = async () => {
    try {
      const res = await axios.post("/api/auth/secretKey",{secretKey:secretKey})
      console.log(res.data)
      if(res.data) navigate("/register")
    } catch (error) {
      console.log(error)
    }
   }

  return (
    <div className='verify' >
        <div className="check">
      <input type="text" placeholder='Secret Invitation Key' onChange={(e) => setSecretKey(e.target.value) }  />
      <button onClick={handleVerify} >Submit</button>
      </div>
    </div>
  )
}
