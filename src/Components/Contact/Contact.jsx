import React from 'react'
import Heading from '../Heading'
import './Contact.scss'
const Contact = () => {
  return (
    <section className="contact" id="contact">
        <Heading iclass="fas fa-map-pin" h3="contact us"/>
        <div className="box-container">
            <div className="box">
                <i className="fas fa-phone"></i>
                <div className="content">
                    <p>+61 456 788 909</p>
                    <p>+61 424 447 897</p>
                </div>
            </div>
            <div className="box">
                <i className="fas fa-location-dot"></i>
                <div className="content">
                    <p>Melbourne, Victoria</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact