import React from 'react';
import facilities from './Facilities';
import './Facility.scss';

const Facility = () => {
  return (
    <section className="facility">
      <div className="heading">
        <i className="fas fa-heart"></i>
        <h3>Our Facilities</h3>
      </div>
      <div className="box-container">
        {facilities.map((facility) => (
          <div className="box" key={facility.key}>
            <i className={facility.classname}></i>
            <h3>{facility.h3}</h3>
            <p>{facility.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facility;
