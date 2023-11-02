import Post from "../post/Post"
import "./posts.css"
//import Write from "../pages/write/Write"
import React from "react"

export default function posts() {
  return (
    <div className="posts">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
