import React from 'react'

import '../styles/newsletter.css'

import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/sub.jpg'
const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2>Sign up now to receive valuable travel tips and insights.</h2>

                <div className="newsletter__input">
                    <input type="email" placeholder='Enter your email' />
                    <button className='btn newsletter__btn'>Subscribe</button>
                </div>
               
            </div>
            </Col>
            <Col lg='6'>
            <div className="newsletter__img">
                <img src={maleTourist} alt="" />
            </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter
