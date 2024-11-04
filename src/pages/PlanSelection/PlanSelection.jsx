import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPlans } from '../../redux/PlanSelection/plansSlice';
import PlanCard from '../../components/PlanCard/PlanCard';
import AddOnsSection from '../../components/AddOnsSection/AddOnsSection';
import CardDetailsForm from '../../components/CardDetailsForm/CardDetailsForm';
import './PlanSelection.scss';
import HeaderSection from '../../components/HeaderSection/HeaderSection';

const PlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = useSelector(selectPlans);

  const renderAddOns = () => {
    if (selectedPlan === 'justMates') {
      return <AddOnsSection addOns={['BYO secondary GPS - $5/month']} />;
    }
    if (selectedPlan === 'goodMates') {
      return <AddOnsSection addOns={['BYO secondary GPS - $5/month', 'BYO lockbox - $10/month']} />;
    }
    if (selectedPlan === 'bestMates') {
      return <AddOnsSection addOns={['BYO secondary GPS - $5/month', 'Between trip insurance']} />;
    }
    return null;
  };

  return (
    <>
      <HeaderSection/>
      <div className="plan-selection">
        <h2>Select your plan</h2>
        <div className="plan-container">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              features={plan.features}
              price={plan.price}
              isSelected={selectedPlan === plan.id}
              onSelect={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>
        {selectedPlan && renderAddOns()}
        {(selectedPlan === 'goodMates' || selectedPlan === 'bestMates') && <CardDetailsForm />}

        <div className="info-section">
          <p>
            Learn more about the plans here -{' '}
            <a href="/plan-details" className="info-link">
              What is the right plan for me?
            </a>
          </p>
          <p>
            You will be able to switch between plans easily later as well. Speak to our host success team if you need any clarifications.
          </p>
        </div>
      </div>
    </>
  );
};

export default PlanSelection;
