import React from 'react'
import Slider from "react-slick";
import ImgCard from './ImgCard';
import InfoCard from './InfoCard';

const Banner = ({users}) => {

    var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className='w-350 max-h-200 pr-30 flex flex-col justify-center'>
    <Slider {...settings}>
      {
        users.map(user =>(
          <div key={user.id}>
            <div className='p-3 flex justify-between items-center'>
              <InfoCard user={user} />
              <ImgCard image={user.image} name={user.name} />
            </div>
          </div>
        ))
      }
    </Slider>
    </div>
  )
}

export default Banner