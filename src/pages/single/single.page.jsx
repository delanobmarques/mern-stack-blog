import SideBar from "../../components/SideBar/sidebar.component";
import SinglePost from "../../components/SinglePost/singlePost.component";
import "./single.styles.css";

const Single = () => {
  return (
    <div className='single'>
        <SinglePost/>
        <SideBar />
    </div>
  )
}

export default Single;