import './post.styles.css';
import postImage from "../../assets/casamento-09.jpeg";
import { Link } from "react-router-dom";

const Post = ({post}) => {
  return (
    <div className="post">
        <img 
            className="postImage" 
            src={postImage} 
            alt="post" 
        />
        <div className="postInfo">
            <div className="postCats">
                <div className="postCat">Cakes</div>
                <div className="postCat">Decorations</div>
            </div>
            <span className="postTitle">
                <Link className="link" to="/post/:postId"> {post.title} </Link>                
            </span>
            <hr />
            <span className="postDate"> {new Date(post.createdAt).toDateString()} </span>
        </div>
        <p className='postDesc'> {post.desc} </p>
    </div>
  )
}

export default Post;