import "./Blogview.css"

import React from 'react'
import {useParams} from "react-router-dom";
import blogs from "./../../data"

 function Blogview() {

    const {id}=useParams()

    const selectedBlog = blogs.find((blogObject) => blogObject.id === id )

   
  return (
    <div className="selected-blog">
       <img src={selectedBlog.author.avatar} alt="product" className="product-avatar"/>
      <h1 className="author-title">{selectedBlog.title}</h1>
      
      <p className="product-name-date">{selectedBlog.author.price}</p>
      {selectedBlog.content}
    </div>
  )
}
export default Blogview