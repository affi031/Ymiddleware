import React from "react";
import PlanCard from "./PlanCard"; // Import the PlanCard component
import "./SubscriptionPage.css"; // Importing the CSS file

const SubscriptionPage = () => {
  return (
    <div className="subscription-container">
      <h1 className="subscription-container-h1">Why Join the Vortex FX </h1>
      <h1 className="subscription-container-h1">Partner Program ?</h1>
    
      <div className="subscription-cards">
        {/* Using PlanCard component for each plan */}
        <PlanCard 
          title="Basic Plan" 
          price="$9.99/month" 
          description="Includes basic access to all features and regular updates."
        />

        <PlanCard 
          title="Pro Plan" 
          price="$19.99/month" 
          description="Get access to advanced features, faster support, and priority updates."
        />

        <PlanCard 
          title="Premium Plan" 
          price="$29.99/month" 
          description="Enjoy all features, 24/7 priority support, and exclusive resources."
        />
      </div>
    </div>
  );
};

export default SubscriptionPage;
