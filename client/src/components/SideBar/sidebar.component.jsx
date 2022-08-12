import './sidebar.styles.css';
import aboutImage from '../../assets/cinthia-marques-02.png'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span> 
            <img className='sidebarImage' src={aboutImage} alt="Cinthia Marques" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex neque, consequuntur nulla eveniet magnam reiciendis quidem quod! Cupiditate, eum at?</p>
        </div>
        
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span> 
            <ul className="sidebarList">
                <li className="sidebarListItem">Cakes</li>
                <li className="sidebarListItem">Desserts</li>
                <li className="sidebarListItem">Brigadeiros</li>
                <li className="sidebarListItem">Decorations</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span> 
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
            </div>
        </div>

    </div>
  )
}

export default SideBar;