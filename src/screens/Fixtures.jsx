 
import './Fixtures.css';

// import Navbar from './components/Navbar';
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
 
 
import Card from '@mui/material/Card';
import Logo from "../assets/images/logo.jfif"
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Fixtures() {
    
  return (
    <div className='fictures'>
     <Navbar />
     <div className='container-fluid' style={{marginBottom:"100px", marginTop:"50px"}}>

        <div className='row'>
            <Card className='fixturecard'>
                <div className='col-md-4'><h3>Team A</h3></div>

                <div className='col-md-4' style={{display:"flex", justifyContent:"space-evenly"}}>
                 <img src={Logo} alt='TransferParentImage' id='team_A_logo' />
                 <p>4:00</p>
                 <img src={Logo} alt='TransferParentImage' id='team_B_logo' />
                </div>

                <div className='col-md-4'><h3>Team A</h3></div>
            </Card>
        </div>


        <div className='row'>
            <Card className='fixturecard'>
                <div className='col-md-4'><h3>Team A</h3></div>

                <div className='col-md-4' style={{display:"flex", justifyContent:"space-evenly"}}>
                 <img src={Logo} alt='TransferParentImage' id='team_A_logo' />
                 <p>4:00</p>
                 <img src={Logo} alt='TransferParentImage' id='team_B_logo' />
                </div>

                <div className='col-md-4'><h3>Team A</h3></div>
            </Card>
        </div>
        <div className='row'>
            <Card className='fixturecard'>
                <div className='col-md-4'><h3>Team A</h3></div>

                <div className='col-md-4' style={{display:"flex", justifyContent:"space-evenly"}}>
                 <img src={Logo} alt='TransferParentImage' id='team_A_logo' />
                 <p>4:00</p>
                 <img src={Logo} alt='TransferParentImage' id='team_B_logo' />
                </div>

                <div className='col-md-4'><h3>Team A</h3></div>
            </Card>
        </div>

        <div className='row'>
            <Card className='fixturecard'>
                <div className='col-md-4'><h3>Team A</h3></div>

                <div className='col-md-4' style={{display:"flex", justifyContent:"space-evenly"}}>
                 <img src={Logo} alt='TransferParentImage' id='team_A_logo' />
                 <p>4:00</p>
                 <img src={Logo} alt='TransferParentImage' id='team_B_logo' />
                </div>

                <div className='col-md-4'><h3>Team A</h3></div>
            </Card>
        </div>

        <div className='row'>
            <Card className='fixturecard'>
                <div className='col-md-4'><h3>Team A</h3></div>

                <div className='col-md-4' style={{display:"flex", justifyContent:"space-evenly"}}>
                 <img src={Logo} alt='TransferParentImage' id='team_A_logo' />
                 <p>4:00</p>
                 <img src={Logo} alt='TransferParentImage' id='team_B_logo' />
                </div>

                <div className='col-md-4'><h3>Team A</h3></div>
            </Card>
        </div>




     </div>
     <Footer />
    </div>
  );
}

export default Fixtures;
