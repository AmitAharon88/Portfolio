import top from '../images/top.png'
import './BackButton.css'

const BackButton = () => {
    return (
      <div id='backButtonContainer'>
            <a id='topButton' href="#home"><img id='top' src={top} alt='back button'/></a>
       </div>
    );
};
    
    
export default BackButton;