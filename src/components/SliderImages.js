import React from 'react'


import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Slider as cardLocations } from '../data/mock-data';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function SliderImages() {
  const [cards] = React.useState(cardLocations);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
};

  return (
   <Container>
<Typography variant="h5">
News this Weak
</Typography>

<Box   
 >

        <Carousel {...settings}>
        {cards.map((item) => {
          console.log(item);
          return (
            <><Box key={item.id}
              className="slider"

            >

              <img


                src={item.url} />
            </Box>
           </>
          );
        })}
        </Carousel>
      </Box>
    
     


   </Container>
   )
    



  ;
}

export default SliderImages
const Carousel =styled(Slider)`
margin-top:20px;
ul li button{
    &:before{
        font-size:10px;
        color:red;
    }
}
li.slick-active button:before{
    color:red;
}
.slick-list{
    overflow:hidden;
}
button{
    z-index:1;
}
`