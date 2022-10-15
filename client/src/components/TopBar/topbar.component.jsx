import React, { useContext } from 'react';
import './topbar.styles.css';
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';

const TopBar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="top">
            <div className="topLeft">
                {/* <i className="topIcon fa-brands fa-facebook" /> */}
                <a href="https://www.instagram.com/mwlbycinthia/" target="blank">
                    <i className="topIcon fa-brands fa-instagram" />
                </a>
                {/* <i className="topIcon fa-brands fa-twitter" /> */}
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <a className='link' href="#about">ABOUT</a>
                    </li>
                    <li className="topListItem">
                        <a className='link' href="#contact">CONTACT</a>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/menu">MENU</Link>
                    </li>
                    <li className="topListItem">
                        {user && <Link className='link' to="/write">WRITE</Link>}
                    </li>
                    <li className="topListItem" onClick={ handleLogout }>
                        {user && <Link className='link' to="/">LOGOUT</Link>}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {                    
                    user ? (
                        <Link to="/settings">
                            <img className='topImage' src={PF+user.profilePic} alt="user" />
                        </Link>
                    ) : (
                            <ul className='topList'>
                                {/* <li className="topListItem">
                                    <Link className='link' to="/login">LOGIN</Link>
                                </li>
                                <li className="topListItem">
                                    <Link className='link' to="/register">REGISTER</Link>
                                </li>                             */}
                            </ul>
                        )
                }                
                {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
            </div>
        </div>
    )
}
export default TopBar;