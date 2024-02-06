import React,{useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    const submitHandler =async(event) => {
        event.preventDefault()
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
            console.log(userCredentials)
            const user = userCredentials.user 
            localStorage.setItem('token',user.accessToken)
            localStorage.setItem('user',JSON.stringify(user))
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <center>
            <h1>Signup</h1> <br />
            <form onSubmit={submitHandler}>
                <input type="email" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/><br/> 
                <input className='mt-2' type='password' placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)} /><br/> <br/>
                <button className='btn btn-primary' type='submit'>Signup</button>
            </form>
            <p className='mt-2'>Need to Login? <Link to="/login">Login</Link></p>
        </center>
    </div>
  )
}

export default Signup