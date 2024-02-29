import { useState } from "react"
import "./EditModal.css"
import axios from 'axios'
import { FaCheckCircle } from "react-icons/fa";
export default function EditModal({setUserData,userData}) {
    const [editForm,setEditForm] = useState({
        
    
    })
    
    const handleChange = (e) => {
        e.preventDefault();
        setEditForm({...editForm,[e.target.id]:e.target.value})
    }
    console.log(editForm)
    const handleEdit = async () => {
        try {
            const res = await axios.put(`/api/users/${userData.id}/edit`,editForm)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='edit_modal' >
      <form className="wrapper" onSubmit={handleEdit} >
         <button className="close_edit_modal" onClick={() =>  setUserData({id:null})} >X</button>
        <div className="">
            <label >Name</label>
            <input type="text" id='username' defaultValue={userData.name} onChange={handleChange} />
        </div>
        <div className="">
            <label >Email</label>
            <input type="email" id='email' defaultValue={userData.email} onChange={handleChange} />
        </div>
        <div className="">
            <label >Passwqord</label>
            <input type="password" minLength={4}  id='password' placeholder='******' onChange={handleChange}/>
        </div>
        <button className="complete_check"  ><FaCheckCircle className="check_icon" /></button>
      </form>
    </div>
  )
}
