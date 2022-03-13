import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function CarouselContainer()
{
    return(

      <div className="home_slider">
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 imgsize"
      src="image/mobile_banner.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="carousel_right">
      <h3>Mobiles</h3>
      
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 imgsize"
      src="image/cloths_image.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <div className="carousel_right">
      <h3>Cloths</h3>
     
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100 imgsize"
      src="image/laptop.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <div className="carousel_left">
            <h3>Electronics</h3>
     
      </div>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 imgsize"
      src="image/appliances_banner.png"
      alt="Fourth slide"
    />
  </Carousel.Item>

  
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="image/cosmetics.jpg"
      alt="Fifth slide"
    />
  </Carousel.Item>
</Carousel>
</div>
    )
}