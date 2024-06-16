import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Link>
          <p className="text-body-secondary">© 2024</p>
        </div>

        <FooterSection title="Section 1" links={["Home", "Features", "Pricing", "FAQs", "About"]} />

        <FooterSection title="Section 2" links={["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"]} />

        <FooterSection title="Section 3" links={["Link A", "Link B", "Link C", "Link D", "Link E"]} />
      </div>
    </footer>
    
  );
};

const FooterSection = ({ title, links }) => {
  return (
    <div className="col mb-3">
      <h5>{title}</h5>
      <ul className="nav flex-column">
        {links.map((link, index) => (
          <li key={index} className="nav-item mb-2">
            <Link to="/" className="nav-link p-0 text-body-secondary">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
