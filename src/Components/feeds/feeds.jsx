import React from 'react'
import { Posts } from '../../dummydata'
import Post from '../post/post'
import Share from '../share/share'
import "./feeds.css"

export default function Feeds() {
  return (
    <div className='feeds'>
      <div className="feedCnt">
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}
