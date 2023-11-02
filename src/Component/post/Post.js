import "./post.css"
//import { Link } from "react-router-dom"
import React from "react"

export default function Post() {
  return (
    <div className="post">
        <section className="postImg"></section>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
            Lorem ipsum dolor sit amet
                 
            </span>
            <hr/>
            <span className="postData">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Fugit, neque animi. Expedita atque facere accusantium ex eos 
            hic, adipisci tempore, vel officia consequatur doloribus et ullam 
            laudantium accusamus nesciunt! Aut! 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Fugit, neque animi. Expedita atque facere accusantium ex eos 
            hic, adipisci tempore, vel officia consequatur doloribus et ullam 
            laudantium accusamus nesciunt! Aut! 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Fugit, neque animi. Expedita atque facere accusantium ex eos 
            hic, adipisci tempore, vel officia consequatur doloribus et ullam 
            laudantium accusamus nesciunt! Aut! 
        </p>
    </div>
  )
}
