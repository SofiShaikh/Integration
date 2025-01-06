import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'

import heroImg from '../assets/images/main1.jpeg'

import experienceImg from '../assets/images/touristimg2.jpg'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
    <Container>
      <Row>
        <Col  lg="6">
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={'Your Travel Checklist'}/>
            
          </div>
          <h1>Every journey opens the door to moments worth <span className="highlight">
          remembering.</span></h1>
            <p>Embark on a journey of limitless potential and unforgettable experiences. Welcome the unforeseen, rise to challenges, and find tales that inspire growth and transformation. Each path you take reveals new opportunities and memories that stay etched in your heart.</p>
        </div>
        </Col>
        <Col lg="6">
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
        </Col>
       
        <SearchBar/>
      </Row>
    </Container>
    <section>
      <Container>
        <Row>
          <Col lg="3">
          <h5 className="services__subtitle">Our Expertise</h5>
          <h2 className='services__title'>We deliver the finest services.</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg ='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Tours You Can't Miss</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="experience__countent">
          <Subtitle subtitle={'Experience'}/> 
        <h2 >With our all experience <br/> we will serve you </h2>
        <p>Embark on an exciting journey where every experience holds new discoveries.
          <br />
          Such a pleasure it is to enjoy the wonders of life and luxury.</p>
           <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>15K+</span>
              <h6>Successful trip</h6>
            </div>
            <div className="counter__box">
              <span>6K+</span>
              <h6>Regular clients</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Years experience</h6>
            </div>
           </div>
          </div>
          </Col>
          <Col lg='6'>
        <div className="experience__img">
          <img src={experienceImg} alt="" />
        </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={"Gallery"}/>
          <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
          <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Loved by Our Community'}/>
          <h2 className="testimonial__title">What people are saying about our services</h2>
          </Col>
          <Col lg="12">
          <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default Home
