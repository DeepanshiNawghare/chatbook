import React from 'react'
import "./share.css"
import { MdPermMedia, MdLabel, MdPlace, MdEmojiEmotions } from "react-icons/md"

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src='./assets/person/1.jpeg' className='shareProfileImg' alt='profile' />
                    <input type="text" className='shareInput' placeholder='whats in your mind'></input>
                </div>
                <hr />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOptionList" >
                            <MdPermMedia className='shareProfileIcon1' />
                            <span className="shareOptionTxt">Photo or Vedio</span>
                        </div>
                        <div className="shareOptionList">
                            <MdLabel className='shareProfileIcon2'/>
                            <span className="shareOptionTxt">Tag</span>
                        </div>
                        <div className="shareOptionList">
                            <MdPlace className='shareProfileIcon3'/>
                            <span className="shareOptionTxt">Location</span>
                        </div>
                        <div className="shareOptionList">
                            <MdEmojiEmotions className='shareProfileIcon4' />
                            <span className="shareOptionTxt">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
