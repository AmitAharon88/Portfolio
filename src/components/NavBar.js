import profilePic from '../images/AmitPic.png'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav id='home' className='navBar'>
            <ul className='firstUl'>
                <li>
                    <img id="navImg" src={profilePic} alt="Amit" />
                </li>
                <li>
                    <p className='navName'>&#123; Amit Aharon &#125;</p>
                </li>
            </ul>
            <ul className='secondUl'>
                <li><a className='navLinks' href="#about">About</a></li>
                <li><a className='navLinks' href="#projects">Projects</a></li>
                <li><a className='navLinks' href="#contact">Contact</a></li>
            </ul>
        </nav>
       
     );
};

export default NavBar;