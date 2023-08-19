import linkedin from '../images/linkedin.png'
import gitHub2 from '../images/github2.png'
import download from '../images/download.png'
import AmitAharonCV from '../images/AmitAharonCV.pdf'
import './SideBar.css';

const SideBar = () => {
    return (
      <div id='sideNav'>
        <a id='sideLinkedin' href='http://www.linkedin.com/in/amit-aharon'>
            <img className='linkedin' src={linkedin} alt='linkedin icon'/>
        </a>
        <a id='sideGitHub' href='https://github.com/AmitAharon88/Hackathon_1'>
            <img className='gitHub2' src={gitHub2} alt='gitHub icon'/>
        </a>
        <a id='sideDownload'href={AmitAharonCV} download>
            <img className='download' src={download} alt='download icon'/>
        </a>
      </div>

    );
};
    
    
export default SideBar;