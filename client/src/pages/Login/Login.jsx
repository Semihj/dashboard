import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../../redux/admin/adminSlice";
import { useState } from "react";
export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password:"",
  });
  const [error,setError] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  console.log(formData)
  
 
  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(signInStart())
    try {
      const res = await axios.post("/api/auth/login", formData);
      console.log(res.data)
      navigate("/")
      setError()
      dispatch(signInSuccess(res.data))
    } catch (error) {
      dispatch(signInFailure(error.response.data))
      setError(error.response.data)
      console.log(error);
    }
  };
  return (
    <div className="login-page">
      <form onSubmit={handleLogin} >
        <h1 className="sign_in">Sign In</h1>
        <div className="">
          <label>Name</label>
          <input minLength={3} name="username" type="text" placeholder="John Doe" onChange={handleChange} />
        </div>
        <div className="">
          <label>Password</label>
          <input name="password" type="password"  placeholder="******" onChange={handleChange} />
        </div>
        <p className="error_msg" >{error} </p>
        <button className="sign_up-btn" >
          Sign In
        </button>
        <Link to="/register" className="link">
          <p>Don't Have an account?</p>
        </Link>
      </form>
    </div>
  );
}
