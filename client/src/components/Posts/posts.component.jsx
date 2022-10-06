import Post from '../Post/post.component';
import './posts.styles.css';

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      { posts.map(post=> (
          <Post key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Posts;