
import './Players&Staff.css';
import Slider from 'react-slick';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import {  CardActionArea,  } from '@mui/material';
import Card from '@mui/material/Card';
import Headline1 from "../assets/images/headline1.jfif"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 




function PlayerAnaStaff() {

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
    <div>
<Navbar />

         <p id='headlineheaderbadge'>Goalkeepers</p>
         <div className='row sliderrow'>
                    <Slider {...settings} className='slider'>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>    
                    </Slider>
                </div>




   {/* DEFENDERS */}

   <p id='headlineheaderbadge'>Defenders</p>
         <div className='row sliderrow'>
                    <Slider {...settings} className='slider'>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>   

                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>   

                    </Slider>                    
                </div>





{/* MIDFIELDERS */}
<p id='headlineheaderbadge'>MIDFIELDERS</p>
         <div className='row sliderrow'>
                    <Slider {...settings} className='slider'>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>    
                    </Slider>
                </div>




{/* FORWARDS */}
<p id='headlineheaderbadge'>FORWARDS</p>
         <div className='row sliderrow'>
                    <Slider {...settings} className='slider'>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='trainingcard'>
                                <CardActionArea>
                                    <div className='row'>
                                    <div className='col-md-6  col-sm-6 col-xs-6'>
                                        <h2 id='number'>1</h2>
                                        <h3 id='name'>Name</h3>
                                        <h4 id='position'>Position</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-xs-6'>
                                    <CardMedia
                                        component="img"
                                        
                                         image={Headline1}
                                        alt="green iguana"
                                        className='cardmedia'
                                    />
                                    </div>
                                    </div>
                                    
                                    {/* <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            SEASON 2023-24
                                        </Typography>
                                        <Typography className='typography'>
                                            Today's training, is not encourage at all so let us come
                                            in numbers on Tuesday morning 6am on the dot at fosco park.
                                        </Typography>
                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small" color="primary">
                                    Share
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </div>    
                    </Slider>
                </div>


<Footer />
    </div>
  );
}

export default PlayerAnaStaff;
