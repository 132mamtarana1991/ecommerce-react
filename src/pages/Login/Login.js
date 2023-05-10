import React, { useState, useEffect } from 'react'
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
export const Login = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector((state) => state.data);

  const signIn = (e) => {
    e.preventDefault();
    setPassword('');
    setEmail('');
  }
  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user,dispatch]);

  return (
    <div className='login'>
      <div className='login-container'>
        <h1>sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' onClick={signIn} className="login-signIn ">submit</button>
        </form>
      </div>
      <Link to="/register">Create your account account</Link>
    </div>
  )
}
