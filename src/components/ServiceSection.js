// components/ServiceSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import hospitalImg from '../assets/hospital.png';
import medicalImg from '../assets/medical.png';
import stethescopeImg from '../assets/stethescope.png';
import kidneysImg from '../assets/kidneys.png';
import toothImg from '../assets/tooth.png';
import './ServiceSection.css';

const services = [
  {
    img: hospitalImg,
    title: 'Medical Services',
    desc: 'Our comprehensive medical health services are designed to detect concerns early and support lifelong wellness'
  },
  {
    img: toothImg,
    title: 'Dental Care',
    desc: 'Our preventive dental care services are designed to protect your smile and catch issues before they start.'
  },
  {
    img: medicalImg,
    title: 'Medical Care',
    desc: 'Our expert-led medical services focus on early diagnosis, personalized treatment and for a better life.'
  },
  {
    img: stethescopeImg,
    title: 'Surgical care',
    desc: 'Our surgical services combine advanced technology with expert precision to deliver safe procedures.'
  },
  {
    img: kidneysImg,
    title: 'Kidney Care',
    desc: 'Our specialized kidney care services are designed to support early detection and lifelong kidney health and your protection'
  }
];

function ServiceSection() {
  return (
    <div className="our-medical-services">
      <h4 className="services-subheading"># Our Services</h4>
      <h1 className="services-heading">Our Medical Services.</h1>
      <div className="all-services">
        {services.map(({ img, title, desc }) => (
          <div key={title} className="service-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <button><Link to="/medicalservices">Read More</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
