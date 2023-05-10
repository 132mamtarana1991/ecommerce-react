import React,{useState} from 'react'
import './Register.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setName] = useState('');

  let dispatch = useDispatch();
  const RegisterLogin = (e) =>{
    e.preventDefault();
    setEmail('');
    setPassword('');
    setName('')
  }
  return (
    <div><div className='register'>
    <div className='register-container'>
      <h1>Create Account</h1>
      <form>
      <h5>Name</h5>
        <input type="text" value = {displayName} onChange={(e)=>setName(e.target.value)}/>
        <h5>E-mail</h5>
        <input type="text" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type="text" value = {password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit' onClick={RegisterLogin} className="register-signIn ">submit</button>
      </form>
    </div>
    <Link to="/login">Allready Account</Link>
      </div></div>
  )
}
