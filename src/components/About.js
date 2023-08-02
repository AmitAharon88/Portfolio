import './About.css';
import profilePic from '../images/AmitPic.png'

const About = (props) => {
    return (
      <div id='aboutSection'>
         <div className='intro'>
            <img id="aboutImg" src={profilePic} alt="Amit" />
            <h1 className='introWelcome'>Hello, I'm Amit Aharon, a  Full Stack Developer</h1>
            <h3 className='introDesc'>I provides clean and efficient code for optimal user experience.</h3>
         </div>
         <div id='about' className='aboutTextContainer'>
            <div id='aboutHeader'>
               <h1>About<br/>Me</h1>
            </div>
            <div id='aboutText'>
               <h1 className='quote'> "As a developer I get excited by the process of creation and problem solving with smart code solutions."</h1>
               <div className='description'>
                  <p>Building front and back ends of websites allows me to create dynamic, interactive, and user-friendly web applications that can deliver a seamless experience to all. Using my abilities as a developer, I enjoy crafting feature-rich applications that offer real-time updates, smooth interactions, and responsive designs.</p>
                  <p>I am open to job opportunities where i can learn and grow my skills.</p>
               </div>
               <div>
                  <div className='skills'>
                        <h4 className='skillHeader'>Skills:</h4>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Python</p>
                        <p>Django</p>
                        <p>Django REST</p>
                        <p>Javascript</p>
                        <p>Node.js</p>
                        <p>React</p>
                        <p>SQL</p>
                  </div>
               </div>
            </div>
         </div>
      </div>


    );
};
    
    
export default About;