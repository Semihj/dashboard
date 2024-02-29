import React from 'react'
import "./DeleteModal.css"
import axios from 'axios'
export default function DeleteModal({setDeleteData,deleteData}) {
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/api/users/${deleteData.id}/delete`)
            console.log(res.data)
            setDeleteData({id:null})
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='delete_modal' >
      <div className="wrapper">
        <h1>Do You Want to Delete the user</h1>
        <div className="buttons">
            <button className='delete_close' onClick={() => setDeleteData({id:null}) } > No</button>
            <button  className='delete_btn' onClick={handleDelete } > Yes</button>

        </div>
      </div>
    </div>
  )
}
