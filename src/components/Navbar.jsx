import './Navbar.css';
import logo from "../assets/images/logo.jfif"
import { Link } from 'react-router-dom'; 


function Navbar() {
    return (
        <>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="www.safa.com"><img src={logo} alt='logo' id='logo' /></a>
                    </div>

                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        
                        
                        <ul class="nav navbar-nav navbar-right">
                           
                            <li class="dropdown">
                                <Link to="/">Home</Link>
                                
                            </li>

                            <li class="dropdown">
                                <a href="www.safa.com" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us</a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/About">About Us </Link></li>
                                    
                                </ul>
                            </li>

                            <li class="dropdown">
                                <a href="www.safa.com" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Fixtures & Teams</a>
                                <ul class="dropdown-menu">
                                    <li><Link to="/fixtures"> Fixtures</Link></li>
                                    <li><Link to="/PlayersandStaff">Players & Staff</Link></li>
                                    
                                </ul>
                            </li>

                            <li class="dropdown">
                                <a href="www.safa.com" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gallery</a>
                                <ul class="dropdown-menu">
                                    <li><a href="www.safa.com">Action</a></li>
                                    <li><a href="www.safa.com">Another action</a></li>
                                    <li><a href="www.safa.com">Something else here</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="www.safa.com">Separated link</a></li>
                                </ul>
                            </li>

                            

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
