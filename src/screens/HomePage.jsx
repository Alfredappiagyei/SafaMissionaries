import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './HomePage.css';
import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Headline1 from "../assets/images/headline1.jfif"
import Footer from '../components/Footer';

function Homepage() {

    const NextArrow = (props) => {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
    };

    const PrevArrow = (props) => {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 3 slides at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // On smaller screens, show only 1 slide at a time
                },
            },
        ],
    };


    return (
        <div className='home'>
           
                <Navbar />
                <div className='parentheadline'>
                    <div className='row' id='headlineImage'>
                        <img src={Headline1} alt='headlineimage' />
                    </div>
                    <div className='row' id='headlinepublication'>
                        <h1>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                        </h1>
                    </div>
                    <div className='row' id='headlineDescription'>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy
                        </p>
                    </div>
                </div>


                <div className='container-fluid headline'>
                <p id='headlineheaderbadge'>headlines</p>
                <div className='row' id='headlinecontent'>
                    <div className='col-md-4'>
                        <Card className='card'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={Headline1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography className='typography'>
                                        Today's training, is not encourage at all so let us come
                                        in numbers on Tuesday morning 6am on the dot at fosco park.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='card'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={Headline1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography className='typography'>
                                        Today's training, is not encourage at all so let us come
                                        in numbers on Tuesday morning 6am on the dot at fosco park.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='card'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={Headline1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography className='typography'>
                                        Today's training, is not encourage at all so let us come
                                        in numbers on Tuesday morning 6am on the dot at fosco park.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>

        <div>
    </div>










            <div className='training'>
                <p id='trainingheaderbadge'>Training</p>

                <div className='row'>
                    <Slider {...settings} className='slider'>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={Headline1}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={Headline1}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={Headline1}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={Headline1}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={Headline1}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Slider>

                </div>
            </div>  {/* Training */}




{/* LEAGUE */}

            <div className='container  league'>
                <p className='section-theme-indicator'>League</p>
                <div className='row' id='parentrow'>

                    <div className='col-md-7 col-sm-12 col-xs-12 leageLeftDiv'>
                        <div className='leagueImage'>
                            <img src={Headline1} alt='LeagueParentImage' id='LeagueParentImage' />
                        </div>
                        <div className='leagueImagetext'>
                            <h3>
                                Today's training, is not encourage at all so let us come
                                in numbers on Tuesday morning 6am on the dot at fosco park.
                            </h3>
                        </div>
                    </div>


                    <div className='col-md-5 col-sm-12 col-xs-12'>
                    <div className='row  league-section-second-row' >
                            <img src={Headline1} alt='LeagueParentImage' id='league-section-second-row-image' />
                         
                            <p id='league-section-second-row-text'>
                                Today's training, is not encourage at all so let us come
                                in numbers on Tuesday morning 6am on the dot at fosco park.
                            </p>
                    </div>
                    <div className='row  league-section-second-row' >
                            <img src={Headline1} alt='LeagueParentImage' id='league-section-second-row-image' />
                         
                            <p id='league-section-second-row-text'>
                                Today's training, is not encourage at all so let us come
                                in numbers on Tuesday morning 6am on the dot at fosco park.
                            </p>
                    </div>
                    
                     
                    </div>


                </div>
            </div>  {/* LEAGUE */}



            

{/* TRANSFER NEWS */}

<div className='container  transfer'>
                <p className='section-theme-indicator'>Transfer News</p>
                <div className='row' id='parentrow'>

                    <div className='col-md-7 col-sm-12 col-xs-12 leageLeftDiv'>
                        <div className='leagueImage'>
                            <img src={Headline1} alt='TransferParentImage' id='LeagueParentImage' />
                        </div>
                        <div className='transferImagetext'>
                            <h3>
                                Today's training, is not encourage at all so let us come
                                in numbers on Tuesday morning 6am on the dot at fosco park.
                            </h3>
                        </div>
                    </div>


                    <div className='col-md-5 col-sm-12 col-xs-12'>
                    <div className='row  transfer-section-second-row' >
                            <img src={Headline1} alt='LeagueParentImage' id='transfer-section-second-row-image' />
                         
                            <p id='transfer-section-second-row-text'>
                                Today's training, is not encourage at all so let us come
                                in numbers on Tuesday morning 6am on the dot at fosco park.
                            </p>
                    </div>
                    <div className='row  transfer-section-second-row' >
                            <img src={Headline1} alt='LeagueParentImage' id='transfer-section-second-row-image' />
                         
                            <p id='transfer-section-second-row-text'>
                                Today's training, is not encourage at all so let us come
                                in numbers on Tuesday morning 6am on the dot at fosco park.
                            </p>
                    </div>
                    
                     
                    </div>


                </div>
            </div>  {/* TRANSFER NEWS */}









<Footer />










        </div>
    );
}

export default Homepage;
