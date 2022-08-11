import './post.styles.css';
import postImage from "../../assets/casamento-09.jpeg";
import { Link } from "react-router-dom";

const Post = () => {
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
                <Link className="link" to="/post/:postId"> This is the Post Title! </Link>                
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam numquam excepturi ratione ad aliquid iure deserunt, optio asperiores officiis explicabo ex velit aperiam facilis. Dolor quas hic cupiditate molestiae! Asperiores, veniam suscipit nisi, voluptates dolorem laboriosam deserunt debitis delectus unde est amet rerum perspiciatis non blanditiis, aperiam nobis aliquam consequuntur soluta vero ipsa reiciendis? Odio distinctio non harum id numquam!
        </p>
    </div>
  )
}

export default Post