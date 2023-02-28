import React, { useState } from 'react'
import "./post.css"
import { MdMoreVert } from "react-icons/md"
import { Users } from "../../dummydata";

export default function Post({ post }) {

  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);

  const likeHandler =()=>{
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)
  }
  return (
    <div className='post'>
      <div className="postwrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt='profile' className='profilePostImg' />
            <span className='profilePostUsername'>{Users.filter((u) => u.id === post?.userId)[0].username}</span>
            <span className='profilePostDate'>{post.date}</span>
          </div>
          <div className="postTopRight">
            <MdMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className='PostTxt'>{post.desc ? post.desc : 'Post!..'}</span>
          <img src={post.photo} alt='profile' className='postImg' />
        </div>
        <div className="postbottom">
          <div className="postBottomLeft">
            <img src='../assets/like.png' alt='like' onClick={likeHandler} className='postLike' />
            <img src='../assets/heart.png' alt='heart' onClick={likeHandler} className='postLike' />
            <span className='postLikeCounter'>{like} people liked it</span>
          </div>
          <div className="postbottomRight">
            <span className='postCommentText'>{post.comment} Comment</span>
          </div>
        </div>

      </div>
    </div>
  )
}
