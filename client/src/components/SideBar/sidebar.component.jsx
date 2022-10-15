import './sidebar.styles.css';
import aboutImage from '../../assets/cinthia-marques-02.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get("/categories");
            setCategories(response.data);
        }
        getCategories();
    },[])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle" id="about">ABOUT ME</span> 
                <img className='sidebarImage' src={aboutImage} alt="Cinthia Marques" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex neque, consequuntur nulla eveniet magnam reiciendis quidem quod! Cupiditate, eum at?</p>
            </div>
            
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span> 
                <ul className="sidebarList">
                    { categories.map((category) => (
                        <Link to={`/?cat=${category.name}`} className="link" key={category.name}>
                            <li className="sidebarListItem">{category.name}</li>
                        </Link>
                    ))}                    
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle" id="contact">CONTACT</span> 
                <div className="sidebarSocial">
                    <a href="mailto: mwlbycinthia@gmail.com" target="blank">
                        <i className="fa fa-envelope sidebarIcon" aria-hidden="true"></i>
                    </a>
                    <a href="https://ig.me/m/mwlbycinthia/" target="blank">
                        <i className="sidebarIcon fa-brands fa-instagram"/>
                    </a>
                    <a href="https://wa.me/19024784600" target="blank">
                        <i className="sidebarIcon fa-brands fa-whatsapp"></i>
                    </a>
                        
                </div>
            </div>

        </div>
    )
}

export default SideBar;