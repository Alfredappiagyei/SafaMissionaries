import * as React from 'react';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import './Footer.css';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';



function Footer() {
   return (
      <div className='container-fluid footer'>
         <div className='form-section'>
            <ul>
               <li>privacy policy</li>
               <li>Terms and Conditions</li>
               <li> Help</li>
               <li>Contact us</li>
            </ul>

            <div className='icongroup1'>
               <li><LinkedInIcon sx={{ fontSize: 22 }} /></li>
               <li><FacebookOutlinedIcon sx={{ fontSize: 22 }} /></li>
               <li><SubscriptionsOutlinedIcon sx={{ fontSize: 22 }} /></li>
               <li><TwitterIcon sx={{ fontSize: 22 }} /></li>
               <li><InstagramIcon sx={{ fontSize: 22 }} /></li>

            </div>
         </div>

         <Divider />
         <p id='copyright'>&copy; COPYRIGHT 2023 THE SOCCER FOUNDATION. ALL RIGHTS RESERVED.
            REPRODUCED UNDER LICENCE. ALL RIGHTS RESERVED.</p>
         <div className='icongroup2'>
            <li><LinkedInIcon sx={{ fontSize: 22 }} /></li>
            <li><FacebookOutlinedIcon sx={{ fontSize: 22 }} /></li>
            <li><SubscriptionsOutlinedIcon sx={{ fontSize: 22 }} /></li>
            <li><TwitterIcon sx={{ fontSize: 22 }} /></li>
            <li><InstagramIcon sx={{ fontSize: 22 }} /></li>

         </div>

      </div>
   );
}

export default Footer;
