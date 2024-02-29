import React, { useEffect, useState } from 'react'
import "./Settings.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import axios from 'axios';
export default function Settings() {
  const [isCopied,setIsCopied] = useState(false)
  const {currentUser} = useSelector((state) => state.user)
  const [adminSecretKey,setAdminSecretKey] = useState()

  useEffect(() => {
    const getSecretKey = async () => {
      try {
        const res = await axios.get(`/api/auth/${currentUser._id}/secretKey`)
        setAdminSecretKey(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getSecretKey()
  }, [])
  console.log(adminSecretKey)
  
  return (
    <div className='settings' >
      <div className="secret_key">
        <h1>Secret Key</h1>
        <div className="secret_key_info">
        <input className='' value={adminSecretKey} type='password' disabled />
        <button>{!isCopied ? <FaRegCopy className='copy_icon' onClick={ async () => {
          navigator.clipboard.writeText(adminSecretKey)
          setTimeout(() => {
            setIsCopied(true)
          },1000)
        }  }  />:<FaCheck className='check_icon'/> }</button>
      </div></div>
    </div>
  )
}
