import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed: 500,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:2,

        responsive:[
            {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }  ,
        },
    ],
    };
  return (
 <Slider {...settings}>
<div className="testimonial py-4 px-3">
<p>"Hassle-Free and Reliable!"I’ve used this platform for multiple trips, and it’s always been a smooth experience. Their customer support is top-notch, and I appreciate the detailed itineraries. Highly recommend it for anyone who loves traveling stress-free!</p>

<div className="d-flex align-items-center gap-4 mt-3">

<div>
    <h6 className='mb-0 mt-3'>Sarah P., California</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"A Treasure Trove of Hidden Gems!"The site’s curated list of lesser-known destinations was a game-changer for me. I got to explore places off the beaten path that I would have never discovered on my own. Truly a travel lover's paradise!
   </p>

<div className="d-flex align-items-center gap-4 mt-3">

<div>
    <h6 className='mb-0 mt-3'>Daniel R., New York</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"An Unforgettable Journey!"This website made planning my dream vacation so easy! From booking flights to finding the perfect stay, everything was seamless. I especially loved the local recommendations—they made my trip truly special. Can't wait to plan my next adventure!
    </p>

<div className="d-flex align-items-center gap-4 mt-3">

<div>
    <h6 className='mb-0 mt-3'>Priya K., India</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"Affordable and Convenient!"Budget travel made easy! I found fantastic deals on flights and accommodations, all in one place. Plus, the reviews and photos were super helpful for making informed choices. 10/10 would recommend!
</p>

<div className="d-flex align-items-center gap-4 mt-3">

<div>
    <h6 className='mb-0 mt-3'> Carlos M., Mexico City</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"Perfect for Family Adventures!"Planning a family vacation can be tricky, but this site made it a breeze. The kid-friendly options were great, and the suggested itineraries ensured that everyone had a great time. A big thumbs up from us! 
</p>

<div className="d-flex align-items-center gap-4 mt-3">

<div>
    <h6 className='mb-0 mt-3'> Emily W., Sydney</h6>
    <p>Customer</p>
</div>
</div>
</div>
 </Slider>
  )
}

export default Testimonials
