import React from 'react'
import './Menu.scss'
import items from './Items'


const Menu = () => {
  return (
    <section className="menu" id="menu">
        <div className="heading">
            <i className="fas fa-caret-down"></i>
            <h3>Popular Menu</h3>

        </div>
        <div className="box-container">
            {items.map((item) => (
                <div className="box" key={item.key}>
                    <img src={item.src} alt="coffee" />
                    <h3>{item.h3}</h3>
                </div>
            ))}

        </div>
    </section>
  )
}

export default Menu