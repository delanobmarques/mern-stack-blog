import React, { useContext } from 'react';
import './topbar.styles.css';
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
import menu from "../../assets/menu.pdf";
import logo from '../../assets/logo-round.png';

const TopBar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="top">
            <img className='logoImg' src={logo} alt='mwlbycinthia'/>
            <div className="topLeft">
                {/* <i className="topIcon fa-brands fa-facebook" /> */}                
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
                        <a className='link' target="_blank"  href={ menu } rel="noreferrer">MENU</a>
                    </li>
                    {//onlly display this <li> if user is logged in 
                        user && <li className="topListItem">
                            <Link className='link' to="/write">WRITE</Link>
                        </li>
                    }
                    {//onlly display this <li> if user is logged in 
                        user && <li className="topListItem" onClick={ handleLogout }>
                                    <Link className='link' to="/">LOGOUT</Link>
                                </li>
                    }                    
                </ul>
                <a href="https://www.instagram.com/mwlbycinthia/" target="blank">
                    <i className="topIcon fa-brands fa-instagram" />
                </a>                
                
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