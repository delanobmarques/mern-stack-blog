import React from 'react';
import './topbar.styles.css';
import cinthiaImg from '../../assets/cinthia-marques.png';
import { Link } from "react-router-dom";

const TopBar = () => {
    //for temporary test purposes
    const user = false;
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className='link' to="/">HOME</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/">ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/">CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/write">WRITE</Link>
                </li>
                <li className="topListItem">
                    {user && <Link className='link' to="/">LOGOUT</Link>}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img className='topImage' src={cinthiaImg} alt="user" />
                ) : (
                        <ul className='topList'>
                            <li className="topListItem">
                                <Link className='link' to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                            <Link className='link' to="/register">REGISTER</Link>
                            </li>                            
                        </ul>
                    )
            }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar