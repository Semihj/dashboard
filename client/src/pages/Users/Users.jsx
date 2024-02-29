import { useEffect, useState } from 'react'
import "./Users.css"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios"
import {format} from "date-fns"
import { FaUserEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import {Link} from "react-router-dom"
import EditModal from '../../Modals/EditModal/EditModal';
import AddModal from '../../Modals/AddModal/AddModal';
import DeleteModal from '../../Modals/DeleteModal/DeleteModal';

export default function Users() {
  const [users,setUsers] = useState([])
  const [modal, setModal] = useState(false)
  const [deleteData, setDeleteData] = useState({})
  const [userData, setUserData] = useState({id:null})
  
  const userRows = []
  
  useEffect(() => {
    getUsers()
    
  }, [])
  const columns = [
    { 
      field: 'id',
      headerName: 'ID', 
      width: 90,
     },
    
    {
      field:"img",
      headerName:"img",
      width:50,
      renderCell:(params) => {
        return<Link to={`/user/${params.row.id}`} > <img src={params.row.img} className='user_img' alt='' /></Link>
      }
    },
    {
      field: 'name',
      headerName: 'name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'email',
      width: 150,
      editable: true,
    },
   
    {
      field: 'createdAt',
      headerName: 'createdAt',
      width: 150,
      editable: false,
    },
    {
      field: 'edit',
      headerName: 'edit',
      width: 150,
      renderCell:(params) => {
        return (
          <div className="icons">
           <FaUserEdit className='edit' onClick={() => setUserData(params.row)} />
           <FaTrashAlt className='delete' onClick={() => setDeleteData({id:params.row.id})}  />
          </div>
        )
      },
      editable: false,
    },
   


  ];
   users?.forEach((user) => {
        const created = new Date(user.createdAt);
        return (
          userRows.push({
            id:user._id,
            name:user.username,
            img:user.profileImg,
            email:user.email,
            createdAt:format(created,"MM/dd/yyyy")
          })
        )
      })
  const rows = userRows
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/users/get")
      setUsers(res.data)
     
      
    } catch (error) {
      console.log(error)
    }
  }
  console.log(deleteData)
    return (
    <div className='users' >
      {userData.id && <EditModal setUserData={setUserData} userData={userData} /> }
      {modal && <AddModal setModal={setModal} />}
      {deleteData.id && <DeleteModal setDeleteData={setDeleteData} deleteData={deleteData} />}
      <div className="add_users">
        
      <h1 className='users_title' >Users</h1>
      <button className='users_btn' onClick={() => setModal(true) }  >Add a User</button>
      </div>
      <div className="data-grid">
      <Box sx={{ height:"max-content",margin:"20px", width: 'max-content' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
      </div>
    </div>
  )
}
