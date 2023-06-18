import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../css/carousel.css'

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={80}
        isIntrinsicHeight
        totalSlides={3}
        isPlaying
        interval={5000}
      >
        <div className='p-2 d-flex justify-content-around'>
            <ButtonBack className='carousel-button carousel-left'>&lt; Previous</ButtonBack>
            <ButtonNext className='carousel-button carousel-right'>Next &gt;</ButtonNext>
        </div>
        <Slider>
          <Slide index={0} onClick={() => window.location.href='https://www.google.com'}><img src="/img/slider/img1.jpg" width="100%" style={{height:'70vh', objectFit: "contain"}}></img></Slide>
          <Slide index={1} onClick={() => window.location.href='https://www.bing.com'}><img src="/img/slider/img2.jpg" width="100%" style={{height:'70vh', objectFit: "contain"}}></img></Slide>
          <Slide index={2} onClick={() => window.location.href='https://www.yandex.com'}><img src="/img/slider/img3.jpg" width="100%" style={{height:'70vh', objectFit: "contain"}}></img></Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}