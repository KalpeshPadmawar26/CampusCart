import React from "react";
import DynamicHelmet from "./DynamicHelmet";

const Footer = () => {
  return (
    <>
      <DynamicHelmet
        title="CampusCart - Your Student Marketplace"
        description="Explore a range of products on CampusCart, the go-to marketplace for students to buy and sell items within their campus community."
        keywords="student marketplace, campus buy and sell, used student products, CampusCart, student community"
      />
      <footer className="footer">
        <div className="footer-item">
          <h4>Contact Us</h4>
          <p>
            <a href="tel:+918805232927">+91-7218476417</a>
          </p>
        </div>
        <div className="footer-item">
          <h4>Support</h4>
          <p>
            <a href="mailto:waghmarevishal438@gmail.com">
              kalpeshpadmawar22@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-item">
          <h4>Get in Touch</h4>
          <p>
            <a href="mailto:waghmarevishal438@gmail.com">
             kalpeshpadmawar22@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-item social-icons">
          <a
            href="https://www.linkedin.com/in/kalpesh-padmawar"
            aria-label="LinkedIn"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a href="https://github.com/KalpeshPadmawar26/" aria-label="GitHub">
            <i className="ri-github-fill"></i>
          </a>
          <a href="" aria-label="Twitter">
            <i className="ri-twitter-fill"></i>
          </a>
        </div>
        <div className="footer-item">
          <p>Developed and Designed by Kalpesh & Kailas</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
