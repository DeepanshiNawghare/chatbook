import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Chat Book</h3>
                <span className='loginDesc'>Connect with friends and the world around you on Chat book</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <h3>Log in to Chatbook</h3>
                    <input type="email" placeholder='Email' className="logininput" />
                    <input type="password" placeholder='Password' className="logininput" />
                    <button className='loginButton'>Log in</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="createAcc">Create a New Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
