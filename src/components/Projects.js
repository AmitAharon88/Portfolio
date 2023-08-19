import SkiAlert from '../images/SkiAlert.png';
import ProFinder from '../images/ProFinder.png';
import gitHub from '../images/github.png';
import web from '../images/web.png';
import './Projects.css';

const Projects = (props) => {
    return (
       <div id='projects' className='projectsContainer'>
          <h1 id='projectsHeader'>Projects</h1>
          <div id='projectContainer'>
            <img className='projectImg' src={SkiAlert} alt='SkiAlert project'/>
            <div className='projExplanationContainer'>
               <h3 className='projectName'>SkiAlert</h3>
               <p className='projectText'>SkiAlert is a user-friendly platform designed for ski and snowboard enthusiasts, providing a quick and effortless way to access up-to-date snow conditions.</p>
               <div className='toolsContainer'>
                  <p className='projectText'>Tools used:</p>
                  <p className='tool'>HTML</p>
                  <p className='tool'>CSS</p>
                  <p className='tool'>Javascript</p>
               </div>
               <div className='iconContainer'>
                  <a href='https://github.com/AmitAharon88/Hackathon_1'>
                     <img className='gitHub' src={gitHub} alt='gitHub icon'/>
                  </a>
                  {/* <a href='#'> */}
                     <img className='web' src={web} alt='website icon'/>
                  {/* </a> */}
               </div>
            </div>
          </div>
          <div id='projectContainer2'>
            <img className='projectImg' src={ProFinder} alt='SkiAlert project'/>
            <div className='projExplanationContainer'>
               <h3 className='projectName'>ProFinder</h3>
               <p className='projectText'>Profinder is an engaging platform that facilitates seamless connections between students and tutors. By signing in as a student, you gain access to search for tutors based on categories or locations. On the other hand, tutors can register themselves on the platform for students to discover. Profinder has integreated messenger capability, which allows students to reach out to tutors directly.</p>
               <div className='toolsContainer'>
                  <p className='projectText'>Tools used:</p>
                  <p className='tool'>React</p>
                  <p className='tool'>Node.js</p>
                  <p className='tool'>Javascript</p>
                  <p className='tool'>CSS</p>
               </div>
               <div className='iconContainer'>
                  <a href='https://github.com/AmitAharon88/FinalProject_ProFinder'>
                     <img className='gitHub' src={gitHub} alt='gitHub icon'/>
                  </a>
                  {/* <a href='#'> */}
                     <img className='web' src={web} alt='website icon'/>
                  {/* </a> */}
               </div>
            </div>
          </div>
       </div>
    );
};
    
    
export default Projects;