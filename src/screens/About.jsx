
// import Navbar from './components/Navbar';
import './About.css';
import Headline1 from "../assets/images/headline1.jfif"
import Navbar from '../components/Navbar';


function About() {
  return (
    
   <div  className='about'>
     <Navbar />
    <div className='container-fluid'>
        
        <div className='row'>
            <div className='col-md-6 col-sm-12 col-xs-12  divleft'>
            <img src={Headline1} alt='aboutphoto' class="aboutphoto image-contain" />
            </div>
            <div className='col-md-6 col-sm-12 col-xs-12'>hi</div>
        </div>
    </div>
   </div>
   
  );
}

export default About;
