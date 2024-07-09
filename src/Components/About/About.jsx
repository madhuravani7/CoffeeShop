import React from 'react'
import './About.scss'
import about from '../../assets/about.jpg'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="image">
            <img src={about} alt="coffee"/>
        </div>
        <div className="content">
            <h3>A cup of coffee from our CoffeeCup</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla assumenda incidunt quidem quos voluptatum natus.</p>
            <a href="#menu" className='btn'>our menu</a>
        </div>
    </section>
  )
}

export default About