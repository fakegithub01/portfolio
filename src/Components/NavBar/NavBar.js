import './NavBar.css';
import profile from '../../Assets/Images/profile.png';
import { Link } from 'react-scroll';

function NavBar() {
    return (
        <nav className='navbar'>
            <h1>&lt;Vivek Yadav&gt;</h1>
            <ul className='navbar-menu'>
                <li ><Link to="home" smooth={true} duration={500} className='navbar-item'>Home</Link></li>
                <li ><Link to="About" smooth={true} duration={500}className='navbar-item'>mySelf</Link></li>
                <li ><Link to="skills" smooth={true} duration={500}className='navbar-item'>Skills😎</Link></li>
                <li ><Link to="projects" smooth={true} duration={500}className='navbar-item'>myProjects</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
