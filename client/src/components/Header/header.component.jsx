import './header.styles.css';
import headerImage from '../../assets/header.jpeg'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleLg'>Made With Love</span>
            <span className='headerTitleSm'>by Cinthia Marques</span>
        </div>
        <img src={headerImage} alt="Header" className="headerImage" />
    </div>
  )
}

export default Header