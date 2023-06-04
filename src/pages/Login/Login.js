import React, { useState } from 'react'
import './Login.css';
import { Link } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import { loginUser } from "../../redux/action";
export const Login = () => {
  let dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    if(email.length && password.length){
      dispatch(loginUser({email,password}))
      setEmail('');
      setPassword('');
    }else(
      alert('please enter all field')
    )
  }

  return (
      <div className="row">
        <div className="form-section col-md-6 col-sm-12 tab-100">
          <div className="container">
            <div id="show-login" className="from-top wrapper">
              <div className="signup signup-heading">
              <h2>login</h2>
                <p>Login to see your Growth and get consulting support!</p>
              </div>


              <div className="signup email-signup">
                <span>or Sign in with Email</span>
              </div>
              <form method="post">
               

                <div className="form-field">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="example@site.com"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Min. 8 Characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="signup agree-notif">
                  <label for="agree">
                    <input type="checkbox" name="agree" id="agree" />
                    <span>
                      I agree to the <Link to="#">Terms &amp; Conditions</Link>
                    </span>
                  </label>
                </div>

                <div className="login agree-notif">
                  <label for="remember">
                    <input type="checkbox" name="remember" id="remember" />
                    <span>Remember me</span>
                  </label>
                </div>

                <div className="signup signup-submit">
                  <button className="shine" onClick={signIn} >
                  Login
                  </button>
                </div>

               
              </form>

              <div className="signup login-notif">
              New Member?{" "}
                <span className="show-hide">
                  <Link to="/register">  Sign up</Link>
                </span>
              </div>
              <div className="copyright">@2022 Design All rights reserved</div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 tab-100 slider">
          <div
            id="slider"
            className="slider-inner carousel slide"
            data-bs-ride="carousel"
          >
            <div className="slide-wrap">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption">
                    <h1>Turn your ideas into reality.</h1>
                    <p>
                      Consistent quality and experience across all platforms and
                      devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
