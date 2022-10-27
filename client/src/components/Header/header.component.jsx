import './header.styles.css';
import headerImage from '../../assets/header.jpeg';
import logo from '../../assets/logo-horizontal.png';

const Header = () => {
  return (
    <>
      {/* <img className='logo headerTitleImg' src={logo} alt='mwlbycinthia'/> */}
      <div className='header'>
          <div className="headerTitles">
              
              {/* <span className='headerTitleLg'>Made With Love</span> */}
              {/* <span className='headerTitleSm'>by Cinthia Marques</span> */}
          </div>
          <img src={headerImage} alt="Header" className="headerImage" />
      </div>
    </>
  )
}

export default Header