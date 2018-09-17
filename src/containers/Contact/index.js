import React from 'react';
import { Header } from './header';
import { Form } from './form';
import { Footer } from './footer';
import './styles.css';

const Contact = () => (
  <div className="contact">
    <Header />
    <main className="contact-main">
      <div>
        <Form />
        <div className="about">
          <div className="contacts-container">
            <h2 className="about__title">About Denteez</h2>
            <div className="about__text">
              Why is it always so difficult to find what you are looking for in dentistry? Whether
              it is the latest advancement in technology or techniques or simply a review or
              understanding of the vast amount of products? Perhaps finding someone to just fix your
              broken equipment or simply hiring new staff or looking for that new job? Our mission
              is to give every dental professional the possibility to discuss and share all aspects
              of their profession, their practice and their business. We aim to make the world of
              dentistry easy and accessible, so every dental professional can find what they are
              looking for quickly and easily all in one place.
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export { Contact };
