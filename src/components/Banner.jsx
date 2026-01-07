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
    <div className='w-70 md:w-140 lg:w-180 xl:w-250 2xl:w-350 max-h-170 lg:pr-10 xl:pr-20 2xl:pr-30 '>
    <Slider {...settings}>
      {
        users.map(user =>(
          <div key={user.id}>
            <div className='p-1 md:p-3 flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
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