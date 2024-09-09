import React, { useEffect, useRef } from 'react';
import './PlanCard.css'; // Import CSS specific to the card

const PlanCard = ({ title, price, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <h2 className="PlanCard-title">{title}</h2>
      <p className="PlanCard-price">Price: {price}</p>
      <p className="PlanCard-description">{description}</p>
    </div>
  );
};

export default PlanCard;
