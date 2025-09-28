import React from "react";
import Feature from "./Feature";

const PricingCard = ({ plan }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body flex">
         {plan.popular && <span className="badge badge-xs badge-warning">Most Popular</span>}
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{plan.name}</h2>
          <span className="text-xl">{plan.price}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
          {plan.features.map((feature, index) => (
            <Feature key={index} feature={feature}></Feature>
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
