import React from 'react'
import "./register.css"

export default function Register() {
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className='registerLogo'>Chat Book</h3>
                    <span className='registerDesc'>Connect with friends and the world around you on Chat book</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <h3>Create a new account</h3>
                        <span className="registerName">
                            <input type="text" placeholder='First Name' className="registerFN" />
                            <input type="text" placeholder='Last Name' className="registerFN" />
                        </span>
                        <input type="text" placeholder='Email' className="registerinput" />
                        <input type="password" placeholder='Password' className="registerinput" />
                        {/* <div className='registerDatebtn'>
                            <span>Date of Birth</span>
                            <input type="date" className="registerinput"></input>
                        </div>
                        <div className='registergender'>
                            <span>Gender</span>
                            <span className='registergenderBtnCnt'>
                                <button className='registergenderBtn'>Male<input type="radio" name="gender" id="male" />
                                    <label htmlFor="male"></label></button>
                                <button className='registergenderBtn'>Female<input type="radio" name="gender" id="female" />
                                    <label htmlFor="female"></label></button>
                                <button className='registergenderBtn'>Other<input type="radio" name="gender" id="other" />
                                    <label htmlFor="other"></label></button>
                            </span>
                        </div> */}
                        <button className='registerButton'>Sign Up</button>
                        <span className="accountLogin">Already have an account?</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
