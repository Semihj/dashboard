import mongoose from "mongoose";
const AdminsSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        
    },
    about:{
        type:String,  
        default:"Hey There I'm a Admin" 
    },
    secretKey:{
        type:String,
        required:true,
        unique:true,
    },
    profileImg:{
        type:String,
        default:"http://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
    },
    coverImg:{
        type:String,
        default:"http://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
    },


},{timestamps:true}
)

const Admin = mongoose.model("Admins",AdminsSchema);

export default Admin;