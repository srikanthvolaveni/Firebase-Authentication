import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("user"));
    const handleLogout =async () =>{
        await signOut(auth)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/login")
    }
  return (
    <div>
        <center>
            <h1>Welcome to React Firebase Auth using Email and Password</h1><br />
            <h2>{data.email}</h2> <br/> <br />
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        </center>
    </div>
  )
}

export default Home