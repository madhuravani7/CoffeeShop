import React from 'react'
import './Gallery.scss'
import pics from './pics'
import Heading from '../Heading'
const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
        
        <Heading iclass="fab fa-envira" h3="our gallery"/>

        <div className="box-container">
            {pics.map((pic) => (
                <div className="box" key={pic.key}>
                    <img src={pic.src} alt="gallery" />
                    <h3>{pic.h3}</h3>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Gallery