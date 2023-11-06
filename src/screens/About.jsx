
// import Navbar from './components/Navbar';
import './About.css';
import Headline1 from "../assets/images/headline1.jfif"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 

function About() {
  return (

    <div className='about'>
      <Navbar />
      <div className='container-fluid'>

        <div className='row'>
          <div className='col-md-6 col-sm-12 col-xs-12  divleft'>
            <img src={Headline1} alt='aboutphoto' class="aboutphoto image-contain" />
          </div>
          <div className='col-md-6 col-sm-12 col-xs-12  divright' >
          <h2><b id='aboutHeaders'>Experts Note</b></h2>
            <p id='aboutNote'>
              Welcome to Safamissionaries.com, a website that aims to give you a vast array of written, audio and video content across all social platforms, providing you with the very best Soccer Angels Football Academy stories around.
              </p>

             <p id='aboutNote'>
              From tactics to transfers and everything in between, we will aim to give you an alternative look at what's relevant with the Academy, past, present and future.
             </p>

                <p id='aboutNote'>
                This is an incredibly exciting time to be a Soccer Angels supporter, and we want to make that journey as exciting as possible through the work of some of the best writers around.
                </p>

              <p id='aboutNote'>
                Support us  to remain fully updated on the latest goings on and all of our content straight to your inbox, and if you like what we do, make sure to tell as many people as possible about us.
              </p>

              <h2><b id='aboutHeaders'>Advertising</b></h2>
              <p>For advertising queries about our website, please e-mail  <span>Mail</span></p>
            

              <h2><b id='aboutHeaders'>Explore more !</b></h2>
              <p>Contact Us</p>

          </div>
        </div>
      </div>





<Footer />
    </div>

  );
}

export default About;
