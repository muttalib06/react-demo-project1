import React, { use } from "react";
import PricingCard from "./PricingCard";

const PricingCardContainer = ({ pricePromiseData }) => {
  const priceData = use(pricePromiseData);
  return <div className="max-w-[80%] mx-auto mt-8">
        <h2 className="font-bold text-2xl">Price Information</h2>

        <div className="grid grid-cols-3 gap-3 mt-8">
                {/* {priceData.plans.map(plan => <PricingCard key ={plan.id} plan={plan}></PricingCard>)} */}

                {priceData.plans.map(plan => <PricingCard key={plan.id} plan={plan}></PricingCard>)}
        </div>
  </div>;
};

export default PricingCardContainer;
