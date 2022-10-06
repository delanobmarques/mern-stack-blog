import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/Header/header.component';
import Posts from '../../components/Posts/posts.component';
import SideBar from '../../components/SideBar/sidebar.component';
import './home.styles.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation;

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("/posts");
      setPosts(response.data);
    };
    getPosts();
  }, [search]);

  return (
    <>
        <Header />
        <div className='home'>            
            <Posts posts={posts} />
            <SideBar />
        </div>
    </>
  )
}

export default Home