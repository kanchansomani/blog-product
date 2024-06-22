import { Link } from "react-router-dom"
import "./Blogcard.css"

function Blogcard({id,title,content,author,price}) {
  return (
    <Link className="blog-card" to={`blog/${id}`}>
    
       <img src={author.avatar} alt="product" className="author-avatar"/>

       <h2 className="blog-title">{title}</h2>

       <p className="blog-content-preview">{content.substring(0,70)}...</p>

       <span className="author-price">{price}</span>

       {/* <div className="Author-card"> */}
          
       
        

       
       
        
    </Link>
  )
}

export default Blogcard
