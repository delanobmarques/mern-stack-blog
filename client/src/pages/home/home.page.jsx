import Header from '../../components/Header/header.component';
import Posts from '../../components/Posts/posts.component';
import SideBar from '../../components/SideBar/sidebar.component';
import './home.styles.css';

const Home = () => {
  return (
    <>
        <Header />
        <div className='home'>            
            <Posts />
            <SideBar />
        </div>
    </>
  )
}

export default Home