import React from 'react';
import PujaDetails from '../PujaDetails/PujaDetails';
import './PujaPackages.css';

const PujaCard = ({ price, title, details, description }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="price">{price}</h3>
      <p className="title">{title}</p>
      <p className="details">{details}</p>
      <hr className="divider" />
      {description.map((line, idx) => (
        <p className="description" key={idx}>
          <img
            alt="Bullet Point"
            style={{ height: '30px', marginRight: '10px' }}
            src='https://srm-cdn.a4b.io/yoda/1710916730304.webp'
          />
          {line}
        </p>
      ))}
      <PujaDetails />
    </div>
  </div>
);

function PujaPackages() {
  const packages = [
    {
      price: "₹851",
      title: "Individual Puja",
      details: "Package for 1 person",
      description: [
        "Pandit ji will call out your name and gotra during the puja sankalp.",
        "Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.",
        "Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.",
        "Sacred Tirth Prasad will be sent to your address within 8-10 days."
      ]
    },
    {
      price: "₹1251",
      title: "Partner Puja",
      details: "Package for 2 persons",
      description: [
        "Pandit ji will call out your name and gotra during the puja sankalp.",
        "Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.",
        "Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.",
        "Sacred Tirth Prasad will be sent to your address within 8-10 days."
      ]
    },
    {
      price: "₹2001",
      title: "Family + Bhog",
      details: "Package for the family",
      description: [
        "Pandit ji will call out your name and gotra during the puja sankalp.",
        "Bhog consisting of fruits, sweets, and dry fruits will be offered to Lord Shiva at Shri Omkareshwar Jyotirlinga Temple",
        "Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.",
        "Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.",
        "Sacred Tirth Prasad will be sent to your address within 8-10 days."
      ]
    },
    {
      price: "₹3001",
      title: "Joint Family + Bhog + Flower Basket",
      details: "Package for joint family",
      description: [
        "Pandit ji will call out your name and gotra during the puja sankalp.",
        "Bhog consisting of fruits, sweets, and dry fruits will be offered to Lord Shiva at Shri Omkareshwar Jyotirlinga Temple along with floral tributes",
        "Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.",
        "Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.",
        "Sacred Tirth Prasad will be sent to your address within 8-10 days."
      ]
    }
  ];

  return (
    <div className="container">
      <h2 className="heading">Select Puja Package</h2>
      <div className="grid">
        {packages.map((pkg, index) => (
          <PujaCard
            key={index}
            price={pkg.price}
            title={pkg.title}
            details={pkg.details}
            description={pkg.description}
          />
        ))}
      </div>
    </div>
  );
}

export default PujaPackages;
